import { FormControlLabel, Switch } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useControllerState } from '../../state/ControllerStateProvider';

export const UseCountInSwitch = observer(() => {
  const { recordingSettings } = useControllerState();
  return (
    <FormControlLabel
      control={
        <Switch
          aria-label="count-in toggle"
          checked={recordingSettings.useCountIn}
          onChange={(event) =>
            recordingSettings.setUseCountIn(event.target.checked)
          }
        />
      }
      label="Countdown"
    />
  );
});
