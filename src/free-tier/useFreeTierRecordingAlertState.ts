import {
  freeTierMaximumVideoDuration,
  freeTierWarningVideoDuration,
  freeTierWarningVideoDurationDelta,
} from '@castify/global-constants';
import { useEffect, useState } from 'react';
import { useControllerState } from '@castify/record-mv3/record-components';
import { autorun } from 'mobx';

export enum AlertState {
  NO_SHOW_BEFORE = 'NO_SHOW_BEFORE',
  NO_SHOW_BETWEEN = 'NO_SHOW_BETWEEN',
  NO_SHOW_FINAL = 'NO_SHOW_FINAL',
  SHOW_FINAL = 'SHOW_FINAL',
  SHOW_WARNING = 'SHOW_WARNING',
}

export const useFreeTierRecordingAlertState = () => {
  const controllerState = useControllerState();
  const [alertState, setAlertState] = useState(AlertState.NO_SHOW_BEFORE);
  useEffect(() => {
    const disposer = autorun(() => {
      const duration = controllerState.recordingInProgress.duration;

      if (
        alertState !== AlertState.NO_SHOW_BEFORE &&
        duration < freeTierWarningVideoDuration
      ) {
        // user might restart the recording, so we need the first if clause to reset us into that state
        setAlertState(AlertState.NO_SHOW_BEFORE);
      } else if (
        duration >
          freeTierMaximumVideoDuration + freeTierWarningVideoDurationDelta &&
        alertState !== AlertState.NO_SHOW_FINAL
      ) {
        setAlertState(AlertState.NO_SHOW_FINAL);
      } else if (
        duration >
          freeTierWarningVideoDuration + freeTierWarningVideoDurationDelta &&
        duration < freeTierMaximumVideoDuration &&
        alertState !== AlertState.NO_SHOW_BETWEEN
      ) {
        setAlertState(AlertState.NO_SHOW_BETWEEN);
      } else if (
        alertState === AlertState.NO_SHOW_BEFORE &&
        duration > freeTierWarningVideoDuration &&
        duration < freeTierMaximumVideoDuration &&
        duration <
          freeTierWarningVideoDuration + freeTierWarningVideoDurationDelta
      ) {
        setAlertState(AlertState.SHOW_WARNING);
      } else if (
        (alertState === AlertState.NO_SHOW_BEFORE ||
          alertState === AlertState.SHOW_WARNING ||
          alertState === AlertState.NO_SHOW_BETWEEN) &&
        duration > freeTierMaximumVideoDuration &&
        duration <
          freeTierMaximumVideoDuration + freeTierWarningVideoDurationDelta
      ) {
        setAlertState(AlertState.SHOW_FINAL);
      }
    });
    return disposer;
  }, [controllerState.recordingInProgress.duration, alertState]);

  const updateOnAlertClose = () => {
    if (
      (alertState === AlertState.SHOW_FINAL ||
        alertState === AlertState.SHOW_WARNING) &&
      controllerState.recordingInProgress.duration >
        freeTierMaximumVideoDuration
    ) {
      setAlertState(AlertState.NO_SHOW_FINAL);
    } else {
      setAlertState(AlertState.NO_SHOW_BETWEEN);
    }
  };

  return { alertState, updateOnAlertClose };
};
