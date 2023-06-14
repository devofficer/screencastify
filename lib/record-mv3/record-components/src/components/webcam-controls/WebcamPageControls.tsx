import { CastifyLogoIcon } from '@castify/record-mv3/common';
import Delete from '@mui/icons-material/Delete';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import StopIcon from '@mui/icons-material/Stop';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { RecordingManager } from '../../controller/commands/RecordingManager';
import { IRecording } from '../../state/recording.mst';
import { ControlButton } from '../buttons/ControlButton';
import styles from './WebcamPageControls.styles';

interface IWebCamPageControlsProps {
  recording: IRecording;
  countInDuration: number;
  deleteConfirmationToggle: (isOpen: boolean) => void;
  recordingManager: RecordingManager;
}

export const WebcamPageControls = observer(
  (props: IWebCamPageControlsProps) => {
    const { recording, recordingManager } = props;

    return (
      <div css={styles.controls}>
        <div css={styles.leftContainer}>
          <CastifyLogoIcon />
          <div>
            <Typography>{props.recording.formattedDuration}</Typography>
          </div>
        </div>
        <div css={styles.verticalBar} />
        <ControlButton
          Icon={Delete}
          toolTipLabel={'Delete'}
          buttonLabel={'Delete'}
          onClick={() => props.deleteConfirmationToggle(true)}
        />
        <ControlButton
          Icon={SettingsBackupRestoreIcon}
          toolTipLabel={'Restart Recording'}
          buttonLabel={'Restart'}
          onClick={async () => {
            recordingManager.restartRecording(recording, true);
          }}
        />
        {(props.recording.state === 'recording' ||
          props.recording.state === 'counting-in') && (
          <ControlButton
            Icon={PauseIcon}
            toolTipLabel={'Pause'}
            buttonLabel={'Pause'}
            onClick={() => recordingManager.pauseRecording(recording)}
          />
        )}
        {props.recording.state === 'paused' && (
          <ControlButton
            Icon={PlayArrowIcon}
            color={'success'}
            toolTipLabel={'Resume'}
            buttonLabel={'Resume'}
            onClick={() => recordingManager.resumeRecording(recording)}
          />
        )}
        <ControlButton
          Icon={StopIcon}
          color={'error'}
          toolTipLabel={'End Recording'}
          buttonLabel={'End'}
          onClick={() => recordingManager.stopRecording(recording)}
        />
      </div>
    );
  },
);
