import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  getRecordingManager,
  Recording,
  IRecording,
  ControllerProtocolDefinition,
  IRecordingSettings,
} from '@castify/record-mv3/record-components';
import { createProtocolHandler } from '@castify/record-mv3/chrome-messaging';

import { useInjectableTab } from './hooks/useInjectableTab';
import { useTabNavigation } from './hooks/useTabNavigation';
import {
  IBrowserLogger,
  createBrowserLogger,
} from '@castify/studio/observability/browser';
import { useRecordingStorageSyncronizer } from './hooks/useRecordingStorageSyncronizer';
import { useInjectionCleanup } from './hooks/useInjectionCleanUp';
import { RecordingInProgressLayout } from './RecordingInProgressLayout';
import { SelectMediaLayout } from './SelectMediaLayout';
import { deleteRecordingMetaDataById } from '@castify/record-mv3/recording-indexed-db';
import { ErrorPage, ErrorTypeEnum } from '@castify/record-mv3/error-handling';

// This is used to distinguish between this and the DesktopController for testing purposes
export const componentId = 'TabController';
const logger: IBrowserLogger = createBrowserLogger('TabController');

interface TabControllerProps {
  recordingSettings: IRecordingSettings;
  createOnComplete: (
    recording: IRecording,
    title?: string,
  ) => (fullBlob: Blob) => void;
}

export const TabController = observer((props: TabControllerProps) => {
  const { recordingSettings, createOnComplete } = props;
  const [recording, setRecording] = useState<IRecording>(() =>
    Recording.create(),
  );

  //last known injection page for tab
  const [tabRecordingTabId, setTabRecordingTabId] = useState<number | null>(
    null,
  );

  const recordingManager = getRecordingManager(recordingSettings, recording.id);

  const { setInjectableTabId, currentTabId } = useInjectableTab(recording);

  //When a recording stops we need to reset the injectable tab id to null
  useInjectionCleanup(recording, setInjectableTabId);

  useTabNavigation(tabRecordingTabId, {
    activeWhen: recording.isRecordingInProgress,
    onBeforeNavigate: () => setInjectableTabId(null),
    onDOMContentLoaded: () => setInjectableTabId(tabRecordingTabId),
    onRemoved: () => recordingManager.stopRecording(recording),
  });

  useRecordingStorageSyncronizer(recording);

  useEffect(() => {
    const onDeleted = () => {
      setInjectableTabId(null);
      deleteRecordingMetaDataById(recording.id);
    };

    const protocolHandler = createProtocolHandler<ControllerProtocolDefinition>(
      {
        RECORDING_CONTROLLER_START: async (message) => {
          const tabIds = {
            activeTabId: message.payload.activeTabId,
            controllerTabId: currentTabId as number,
          };
          logger.debug('setting injectable tab', {
            activeTabId: tabIds.activeTabId,
          });
          setTabRecordingTabId(tabIds.activeTabId);
          setInjectableTabId(tabIds.activeTabId);
          const tabTitle = (await chrome.tabs.get(tabIds.activeTabId)).title;
          await recordingManager.startRecording(
            recording,
            tabIds,
            createOnComplete(recording, tabTitle),
            onDeleted,
            message.payload.isCurrentTabInjectable,
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
        RECORDING_CONTROLLER_RESTART: (message) => {
          recordingManager.restartRecording(
            recording,
            message.payload.isCurrentTabInjectable,
          );
        },
      },
    );
    logger.info('adding protocol handler listener');
    chrome.runtime.onMessage.addListener(protocolHandler);
    return () => chrome.runtime.onMessage.removeListener(protocolHandler);
  }, [
    recording,
    recordingSettings,
    currentTabId,
    createOnComplete,
    recordingManager,
    setTabRecordingTabId,
    setInjectableTabId,
  ]);

  // Whether on or offline, if the recording is in progress, that layout
  // is shown. Once the recording is finished, then what renders is
  // dependent on the user's connection status.

  if (recording.isRecordingInProgress) return <RecordingInProgressLayout />;
  if (!navigator.onLine)
    return <ErrorPage errorType={ErrorTypeEnum.connectionError} />;

  return <SelectMediaLayout />;
});
