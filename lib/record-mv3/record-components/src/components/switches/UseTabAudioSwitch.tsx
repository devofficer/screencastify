import { FormControlLabel, Switch } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useControllerState } from '../../state/ControllerStateProvider';

export const UseTabAudioSwitch = observer(() => {
  const { recordingSettings } = useControllerState();
  return (
    <FormControlLabel
      control={
        <Switch
          aria-label="tab audio toggle"
          checked={recordingSettings.useTabAudio}
          onChange={(event) =>
            recordingSettings.setUseTabAudio(event.target.checked)
          }
        />
      }
      label="Tab Audio"
    />
  );
});
