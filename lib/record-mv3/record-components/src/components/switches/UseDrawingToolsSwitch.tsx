import { FormControlLabel, Switch } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useControllerState } from '../../state/ControllerStateProvider';

export const UseDrawingToolsSwitch = observer(() => {
  const { recordingSettings } = useControllerState();
  return (
    <FormControlLabel
      control={
        <Switch
          aria-label="drawing tools toggle"
          checked={recordingSettings.useAnnotationTools}
          onChange={(event) =>
            recordingSettings.setUseAnnotationTools(event.target.checked)
          }
        />
      }
      label="Show Drawing Tools"
    />
  );
});
