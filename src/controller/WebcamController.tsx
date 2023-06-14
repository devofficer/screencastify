import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  getRecordingManager,
  Recording,
  IRecording,
  ControllerProtocolDefinition,
  IRecordingSettings,
} from '@castify/record-mv3/record-components';
import styles from './Controller.styles';
import { createProtocolHandler } from '@castify/record-mv3/chrome-messaging';

import WebcamPage from '../webcam-page/WebcamPage';
import {
  IBrowserLogger,
  createBrowserLogger,
} from '@castify/studio/observability/browser';
import { useRecordingStorageSyncronizer } from './hooks/useRecordingStorageSyncronizer';
import { CountInOverlay } from '../extension-overlay/CountInOverlay';
import { deleteRecordingMetaDataById } from '@castify/record-mv3/recording-indexed-db';
import { SelectMediaLayout } from './SelectMediaLayout';
import { ErrorPage, ErrorTypeEnum } from '@castify/record-mv3/error-handling';
import { createVideoNameWithTimestamp } from './util/VideoNaming';

const logger: IBrowserLogger = createBrowserLogger('WebcamController');

interface WebcamControllerProps {
  recordingSettings: IRecordingSettings;
  createOnComplete: (
    recording: IRecording,
    title?: string,
  ) => (fullBlob: Blob) => void;
}

export const WebcamController = observer((props: WebcamControllerProps) => {
  const { recordingSettings, createOnComplete } = props;
  const [recording, setRecording] = useState<IRecording>(() =>
    Recording.create(),
  );
  const recordingManager = getRecordingManager(recordingSettings, recording.id);

  useRecordingStorageSyncronizer(recording);

  useEffect(() => {
    const onDeleted = async () => {
      logger.info('User Deleted Recording');
      deleteRecordingMetaDataById(recording.id);
    };

    const protocolHandler = createProtocolHandler<ControllerProtocolDefinition>(
      {
        RECORDING_CONTROLLER_START: async (message) => {
          const currentTab = await chrome.tabs.getCurrent();
          const tabIds = {
            activeTabId: message.payload.activeTabId,
            controllerTabId: currentTab?.id as number,
          };
          await recordingManager.startRecording(
            recording,
            tabIds,
            createOnComplete(
              recording,
              createVideoNameWithTimestamp('Webcam Recording -'),
            ),
            onDeleted,
            true,
          );
        },
        RECORDING_CONTROLLER_STOP: () => {
          recordingManager.stopRecording(recording);
        },
        RECORDING_CONTROLLER_PAUSE: () => {
          recordingManager.pauseRecording(recording);
        },
        RECORDING_CONTROLLER_RESUME: () => {
          recordingManager.resumeRecording(recording);
        },
        RECORDING_CONTROLLER_CLOSE: () => {
          window.close();
        },
        RECORDING_CONTROLLER_DELETE: () => {
          recordingManager.deleteRecording(recording);
          setRecording(Recording.create());
        },
        RECORDING_CONTROLLER_RESTART: async () => {
          recordingManager.restartRecording(recording, true);
        },
      },
    );

    chrome.runtime.onMessage.addListener(protocolHandler);
    return () => chrome.runtime.onMessage.removeListener(protocolHandler);
  }, [recording, recordingSettings, createOnComplete, recordingManager]);

  if (!navigator.onLine) {
    return (
      <>
        <CountInOverlay />
        {recording.isRecordingInProgress ? (
          <div css={styles.controllerContainer}>
            <WebcamPage
              recording={recording}
              countInDuration={recordingSettings.countInDuration}
              recordingManager={recordingManager}
            />
          </div>
        ) : (
          <ErrorPage errorType={ErrorTypeEnum.connectionError} />
        )}
      </>
    );
  }

  return (
    <>
      <CountInOverlay />
      {recording.isRecordingInProgress ? (
        <div css={styles.controllerContainer}>
          <WebcamPage
            recording={recording}
            countInDuration={recordingSettings.countInDuration}
            recordingManager={recordingManager}
          />
        </div>
      ) : (
        <SelectMediaLayout />
      )}
    </>
  );
});
