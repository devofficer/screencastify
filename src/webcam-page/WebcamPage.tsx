import { setExtensionIcon } from '@castify/record-mv3/chrome-actions';
import {
  DeleteRecordingConfirmDialog,
  IRecording,
  RecordingManager,
  useControllerState,
  WebcamPageControls,
} from '@castify/record-mv3/record-components';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { FreeTierRecordingAlert } from '../free-tier/FreeTierRecordingAlert';
import Webcam from '../webcam/Webcam';
import styles from './WebcamPage.styles';

interface IWebCamPageProps {
  recording: IRecording;
  countInDuration: number;
  recordingManager: RecordingManager;
}
const WebcamPage = observer((props: IWebCamPageProps) => {
  const logger = createBrowserLogger('WebcamPage');
  const [recordingState, setRecordingState] = useState('');
  const { userState } = useControllerState();
  useEffect(() => {
    getRecordingState();
  });
  const getRecordingState = () => {
    if (props.recording.state === 'recording') {
      setRecordingState('Rec');
    } else if (props.recording.state === 'paused') {
      setRecordingState('Paused');
    }
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onDialogClose = () => {
    setIsDialogOpen(false);
  };
  logger.info('Rendering in webcam only mode');
  return (
    <div css={styles.videoContainer}>
      <div css={[styles.videoWrapper, styles.videoWrapperBorder]}>
        {(props.recording.state === 'recording' ||
          props.recording.state === 'paused') && (
          <Paper
            css={[
              styles.statusIndicatorContainer,
              props.recording.state === 'recording'
                ? styles.recordingStatusIndicator
                : styles.pauseStatusIndicator,
            ]}
          >
            <Typography css={styles.statusIndicatorText}>
              {recordingState}
            </Typography>
          </Paper>
        )}
        {/* variant doesn't do anything here only applies when circular is true */}
        <Webcam isCircular={false} variant={'lg'} />
      </div>

      {userState.freeTierEnabled && (
        <FreeTierRecordingAlert
          recordingManager={props.recordingManager}
          recording={props.recording}
        />
      )}

      <WebcamPageControls
        recording={props.recording}
        countInDuration={props.countInDuration}
        deleteConfirmationToggle={setIsDialogOpen}
        recordingManager={props.recordingManager}
      />

      <DeleteRecordingConfirmDialog
        isOpen={isDialogOpen}
        onClose={onDialogClose}
        isExtensionPopupView={false}
        onClick={() => {
          props.recordingManager.deleteRecording(props.recording);
          setExtensionIcon(props.recording.state);
        }}
      />
    </div>
  );
});
export default WebcamPage;
