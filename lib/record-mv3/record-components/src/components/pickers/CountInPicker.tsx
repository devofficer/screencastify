import { FormControl, MenuItem, Select } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useControllerState } from '../../state/ControllerStateProvider';

export const CountInPicker = observer(() => {
  const { recordingSettings } = useControllerState();
  return (
    <FormControl
      aria-label="count-in selector"
      variant="standard"
      sx={{ m: 1, width: 200 }}
    >
      <Select
        value={recordingSettings.countInDuration}
        onChange={(event) => {
          const value = event.target.value;
          if (value === 3 || value === 5 || value === 10) {
            recordingSettings.setCountInDuration(value);
          }
        }}
      >
        <MenuItem value={3}>3 Seconds</MenuItem>
        <MenuItem value={5}>5 Seconds</MenuItem>
        <MenuItem value={10}>10 Seconds</MenuItem>
      </Select>
    </FormControl>
  );
});
