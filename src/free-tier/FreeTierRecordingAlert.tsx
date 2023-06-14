import { Box, Link, Stack, Typography } from '@mui/material';
import styles from './FreeTierRecordingAlert.styles';
import CloseIcon from '@mui/icons-material/Close';
import {
  ControllerCommandProtocol,
  IRecording,
  RecordingManager,
  useControllerState,
} from '@castify/record-mv3/record-components';
import { observer } from 'mobx-react-lite';
import {
  AlertState,
  useFreeTierRecordingAlertState,
} from './useFreeTierRecordingAlertState';
import { safeWindowOpen } from '@castify/safe-window-open';
import { environment } from '@castify/record-mv3/environment';

interface FreeTierRecordingAlertWebCamProps {
  recording?: IRecording;
  recordingManager?: RecordingManager;
}
export const FreeTierRecordingAlert = observer(
  (props: FreeTierRecordingAlertWebCamProps) => {
    const controllerState = useControllerState();

    const { alertState, updateOnAlertClose } = useFreeTierRecordingAlertState();

    const onUpgradeClicked = async () => {
      if (props.recording && props.recordingManager) {
        // We are being called from the webcam recording context so we
        // have the recording passed in
        if (props.recording.canPause) {
          props.recordingManager.pauseRecording(props.recording);
        }
      } else {
        // We are in the full screen or tab context so we don't have the recording
        if (controllerState.recorderStatus === 'recording') {
          ControllerCommandProtocol.pause();
        }
      }
      updateOnAlertClose();
      safeWindowOpen(await environment.getExternalLink('pricingPage'));
    };

    if (
      alertState === AlertState.SHOW_WARNING ||
      alertState === AlertState.SHOW_FINAL
    ) {
      return (
        <Box css={styles.outerContainer}>
          <Box css={styles.innerContainer}>
            <Stack
              direction="row"
              css={styles.line}
              justifyContent={'left'}
              spacing={2}
              paddingX={5}
              paddingY={3}
            >
              <Typography fontSize={14}>
                {alertState === AlertState.SHOW_FINAL
                  ? 'Psst - Your video is at 30 minutes.'
                  : 'Psst - Videos over 30 minutes cannot be shared in the Free Plan.'}
              </Typography>
              <Link
                color="inherit"
                onClick={onUpgradeClicked}
                marginLeft={1}
                marginRight={1}
                fontWeight={700}
                fontSize={16}
                css={styles.link}
                underline="hover"
              >
                Upgrade
              </Link>
              <CloseIcon onClick={updateOnAlertClose} css={styles.closeIcon} />
            </Stack>
          </Box>
        </Box>
      );
    }
    return null;
  },
);
