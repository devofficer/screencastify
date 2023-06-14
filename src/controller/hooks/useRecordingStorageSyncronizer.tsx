import { useEffect } from 'react';
import {
  IRecording,
  ControllerStorageDriver,
} from '@castify/record-mv3/record-components';
import {
  setExtensionIcon,
  setExtensionIconWhileCountingIn,
} from '@castify/record-mv3/chrome-actions';
import { reaction } from 'mobx';

function useRecorderStatusSync(recording: IRecording) {
  useEffect(() => {
    ControllerStorageDriver.setRecorderStatus(recording.state);
    return reaction(
      () => recording.state,
      (newStatus) => {
        ControllerStorageDriver.setRecorderStatus(newStatus);
        setExtensionIcon(newStatus);
      },
    );
  }, [recording]);
}

function useRecordingInProgresSync(recording: IRecording) {
  useEffect(() => {
    return reaction(
      () => ({
        recordingId: recording.id,
        duration: recording.approximateDuration,
        countInTimeRemaining: recording.countInTimeRemaining,
        uploadStatus: (recording.readyForExport
          ? 'in-progress'
          : 'not-started') as 'in-progress' | 'not-started',
      }),
      (recordingInProgress) => {
        ControllerStorageDriver.replaceRecordingInProgress(recordingInProgress);
        if (recording.countInTimeRemaining > 0) {
          setExtensionIconWhileCountingIn(recording.countInTimeRemaining);
        }
      },
    );
  }, [recording]);
}

function useCleanupRecordingStatusOnUnload(recording: IRecording) {
  useEffect(() => {
    const beforeUnloadHandler = async (e: BeforeUnloadEvent) => {
      if (recording.isRecordingInProgress) {
        e.preventDefault();
        e.returnValue = "Are you sure you'd like to end your recording?";
      }
    };
    window.addEventListener('beforeunload', beforeUnloadHandler);
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    };
  }, [recording]);
}

export function useRecordingStorageSyncronizer(recording: IRecording) {
  useRecorderStatusSync(recording);
  useRecordingInProgresSync(recording);
  useCleanupRecordingStatusOnUnload(recording);
}
