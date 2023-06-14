import { Switch, Tooltip } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useControllerState } from '../../state/ControllerStateProvider';
import styles from './Switch.styles';

export const UseVideoSwitch = observer(() => {
  const { recordingSettings } = useControllerState();
  return (
    <Tooltip
      title={
        recordingSettings.useVideoDevice ? 'Turn off Camera' : 'Turn on Camera'
      }
      placement="top"
    >
      <Switch
        aria-label="camera toggle"
        checked={recordingSettings.useVideoDevice}
        onChange={(event) =>
          recordingSettings.setUseVideoDevice(event.target.checked)
        }
        css={styles('video', { isEnabled: recordingSettings.useVideoDevice })}
      />
    </Tooltip>
  );
});
