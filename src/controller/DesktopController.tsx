import { createProtocolHandler } from '@castify/record-mv3/chrome-messaging';
import {
  ControllerProtocolDefinition,
  getRecordingManager,
  IRecording,
  IRecordingSettings,
  Recording,
} from '@castify/record-mv3/record-components';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';

import { ErrorPage, ErrorTypeEnum } from '@castify/record-mv3/error-handling';
import { deleteRecordingMetaDataById } from '@castify/record-mv3/recording-indexed-db';
import {
  createBrowserLogger,
  IBrowserLogger,
} from '@castify/studio/observability/browser';
import { EnablePipLayout } from './EnablePipLayout';
import { useActiveTab } from './hooks/useActiveTab';
import { useInjectableTab } from './hooks/useInjectableTab';
import { useInjectionCleanup } from './hooks/useInjectionCleanUp';
import { useRecordingStorageSyncronizer } from './hooks/useRecordingStorageSyncronizer';
import { useTabNavigation } from './hooks/useTabNavigation';
import { RecordingInProgressLayout } from './RecordingInProgressLayout';
import { SelectMediaLayout } from './SelectMediaLayout';
import { createVideoNameWithTimestamp } from './util/VideoNaming';

const logger: IBrowserLogger = createBrowserLogger('DesktopController');

interface DesktopControllerProps {
  recordingSettings: IRecordingSettings;
  createOnComplete: (
    recording: IRecording,
    title?: string,
  ) => (fullBlob: Blob) => void;
}

export const DesktopController = observer((props: DesktopControllerProps) => {
  const { recordingSettings, createOnComplete } = props;
  const [recording, setRecording] = useState<IRecording>(() =>
    Recording.create(),
  );
  const recordingManager = getRecordingManager(recordingSettings, recording.id);

  const { setInjectableTabId, currentTabId } = useInjectableTab(recording);
  const activeTabId = useActiveTab(setInjectableTabId, recording);
  const [requiresSystemPermissions, setRequiresSystemPermissions] =
    useState(false);
  const [error, setError] = useState<Error>();
  const [shouldGetActiveTab, setShouldGetActiveTab] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  // If the video is ready to be popped out
  const [pipVideoReady, setPipVideoReady] = useState(false);
  // If the the video is currently in Pip mode
  const [usingPip, setUsingPip] = useState(false);
  // Saved function used for starting recording in the Pip flow.
  const [startRecordingFunction, setStartRecordingFunction] =
    useState<() => Promise<unknown>>();

  //When a recording stops we need to reset the injectable tab id to null
  useInjectionCleanup(recording, setInjectableTabId);

  useTabNavigation(activeTabId, {
    activeWhen: recording.isRecordingInProgress,
    onBeforeNavigate: () => setInjectableTabId(null),
    onDOMContentLoaded: () => setInjectableTabId(activeTabId),
    onRemoved: () => setShouldGetActiveTab(true),
  });

  useRecordingStorageSyncronizer(recording);

  useEffect(() => {
    const onDeleted = async () => {
      setInjectableTabId(null);
      deleteRecordingMetaDataById(recording.id);
    };

    // For some context, controllerStart is called as soon as
    // we switch to this tab.
    // TODO: can we make this typing better?
    const controllerStart = async (
      message: Pick<
        ControllerProtocolDefinition['RECORDING_CONTROLLER_START'],
        'payload'
      >,
    ) => {
      const tabIds = {
        activeTabId: message.payload.activeTabId,
        controllerTabId: currentTabId as number,
      };
      setInjectableTabId(tabIds.activeTabId);

      if (recordingSettings.pipEnabled) {
        await recordingManager.navigateToConsumingTab(tabIds);
      }

      const onStartRecording = async () => {
        try {
          await recordingManager.startRecording(
            recording,
            tabIds,
            createOnComplete(
              recording,
              createVideoNameWithTimestamp('Desktop Recording -'),
            ),
            onDeleted,
            message.payload.isCurrentTabInjectable,
            recordingSettings.pipEnabled,
          );
        } catch (error) {
          // If there error is missing system permissions set state so we can show UI
          // Else we should set this error so this will be picked up by our error boundary next render
          if ('Permission denied by system' === (error as Error).message) {
            setRequiresSystemPermissions(true);
          } else {
            setError(error as Error);
          }
        }
      };

      if (
        !requiresSystemPermissions &&
        (recordingSettings.pipEnabled ||
          document.pictureInPictureElement !== null)
      ) {
        // For Pip, we save this function because
        // 1) The data it needs come from a message that fires once, so
        //    closing over that data lets us avoid creating more state
        //    based on this message.
        // 2) `controllerStart()` is called as soon as this tab is entered.
        //    In non-pip flows, we can immediately call `onStartRecording()`
        //    But for Pip, we have to wait for a user action, so we
        //    save `onStartRecording()`, then call it after the button has
        //    been clicked / video has entered Pip.
        setStartRecordingFunction(() => onStartRecording);
      } else {
        await onStartRecording();
      }
    };

    const exitPictureInPictureIfInUse = () => {
      if (
        recordingSettings.pipEnabled ||
        document.pictureInPictureElement !== null
      ) {
        document.exitPictureInPicture();
      }
    };

    const protocolHandler = createProtocolHandler<ControllerProtocolDefinition>(
      {
        RECORDING_CONTROLLER_START: controllerStart,
        RECORDING_CONTROLLER_STOP: () => {
          exitPictureInPictureIfInUse();
          recordingManager.stopRecording(recording);
        },
        RECORDING_CONTROLLER_PAUSE: () => {
          recordingManager.pauseRecording(recording);
        },
        RECORDING_CONTROLLER_RESUME: () => {
          recordingManager.resumeRecording(recording);
        },
        RECORDING_CONTROLLER_CLOSE: () => {
          exitPictureInPictureIfInUse();
          window.close();
        },
        RECORDING_CONTROLLER_DELETE: () => {
          exitPictureInPictureIfInUse();
          recordingManager.deleteRecording(recording);
          setRecording(Recording.create());
        },
        RECORDING_CONTROLLER_RESTART: (message) => {
          recordingManager.restartRecording(
            recording,
            message.payload.isCurrentTabInjectable,
          );
        },
      },
    );

    logger.info('setting up protocol handler listener');
    chrome.runtime.onMessage.addListener(protocolHandler);

    return () => chrome.runtime.onMessage.removeListener(protocolHandler);
  }, [
    recording,
    // not using the key here will cause bugs
    recordingSettings.pipEnabled,
    currentTabId,
    createOnComplete,
    setInjectableTabId,
    recordingManager,
    pipVideoReady,
    setStartRecordingFunction,
    requiresSystemPermissions,
  ]);

  useEffect(() => {
    if (!shouldGetActiveTab) return;
    setInjectableTabId(activeTabId);
    return () => setShouldGetActiveTab(false);
  }, [shouldGetActiveTab, activeTabId, setInjectableTabId]);

  // Handle setting media stream for pip if we're using it
  useEffect(() => {
    const setVideoSource = async () => {
      try {
        if (!recordingSettings.pipEnabled) {
          return;
        }

        if (videoRef.current) {
          setPipVideoReady(false);
          videoRef.current.onloadeddata = () => {
            setPipVideoReady(true);
          };

          const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: {
              deviceId: recordingSettings.selectedVideoDeviceId as string,
              width: { ideal: 1280 },
              height: { ideal: 720 },
              frameRate: { ideal: 30 },
            },
          });

          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        // If we don't catch the error here, it will cause an infinite loop
        // on the background page when pip is enabled with no valid camera device
        if (error instanceof Error && error.name === 'NotAllowedError') {
          setRequiresSystemPermissions(true);
        } else {
          setError(error as Error);
        }
      }
    };

    setVideoSource();
  }, [
    videoRef,
    // Just using recordingSettings here instead of the keys causes bugs with state.
    recordingSettings.selectedVideoDeviceId,
    recordingSettings.pipEnabled,
  ]);

  const enablePip = async () => {
    if (!videoRef.current || !pipVideoReady || !startRecordingFunction) {
      return;
    }

    try {
      await videoRef.current.requestPictureInPicture();
      setUsingPip(true);
      await startRecordingFunction();
    } catch (e) {
      setUsingPip(false);
    }
  };

  if (error) throw error;

  return (
    <>
      {/* This video element needs to persist through the entire recording for Pip to work */}
      {recordingSettings.pipEnabled && (
        <video
          style={{ width: 0, height: 0 }}
          ref={videoRef}
          autoPlay
          muted
          data-testid="pip-hidden-video"
        ></video>
      )}

      {/* non-pip select media layout render */}
      {!recording.isRecordingInProgress && !recordingSettings.pipEnabled && (
        <SelectMediaLayout />
      )}

      {!recording.isRecordingInProgress &&
        recordingSettings.pipEnabled &&
        !requiresSystemPermissions &&
        !usingPip && (
          <EnablePipLayout
            canClickButton={pipVideoReady}
            onButtonClick={() => enablePip()}
          />
        )}

      {/* pip specific select media layout render */}
      {!recording.isRecordingInProgress && usingPip && <SelectMediaLayout />}

      {recording.isRecordingInProgress && <RecordingInProgressLayout />}

      {/* If a user loses connection while recording, don't switch to 
        the offline error page until the recording is done */}
      {!recording.isRecordingInProgress && !navigator.onLine && (
        <ErrorPage errorType={ErrorTypeEnum.connectionError} />
      )}
    </>
  );
});
