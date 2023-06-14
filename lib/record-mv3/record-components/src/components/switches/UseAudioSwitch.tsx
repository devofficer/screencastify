import { Switch, Tooltip } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useControllerState } from '../../state/ControllerStateProvider';
import styles from './Switch.styles';

export const UseAudioSwitch = observer(() => {
  const { recordingSettings } = useControllerState();
  return (
    <Tooltip
      title={recordingSettings.useAudioDevice ? 'Turn off Mic' : 'Turn on Mic'}
      placement="top"
    >
      <Switch
        aria-label="toggle mic"
        checked={recordingSettings.useAudioDevice}
        onChange={(event) =>
          recordingSettings.setUseAudioDevice(event.target.checked)
        }
        css={styles('audio', { isEnabled: recordingSettings.useAudioDevice })}
      />
    </Tooltip>
  );
});
