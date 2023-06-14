import { useSyncedControllerState } from '@castify/record-mv3/record-components';
import styles from './Extension.styles';
import { observer } from 'mobx-react-lite';

/**
 * When the time remaining equals zero, stop showing the count-in numbers.
 * This is intended to occur before recording actually starts and prevents capturing the last moments
 * of the count-in overlay number in the beginning of the recording.
 */
function shouldShowCountIn(
  controllerState: ReturnType<typeof useSyncedControllerState>,
) {
  return (
    controllerState.recorderStatus === 'counting-in' &&
    (controllerState.recordingInProgress?.countInTimeRemaining ?? 0) > 0
  );
}

export const CountInOverlay = observer(() => {
  const controllerState = useSyncedControllerState();
  if (shouldShowCountIn(controllerState)) {
    return (
      <div id="count-in-overlay" css={styles.countInOverlay}>
        <div css={styles.countInCircle}>
          <h1 css={styles.countInText}>
            {controllerState.recordingInProgress?.countInTimeRemaining}
          </h1>
        </div>
      </div>
    );
  }
  return null;
});
