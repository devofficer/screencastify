import { FormControl, MenuItem, Select } from '@mui/material';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useControllerState } from '../../state/ControllerStateProvider';
import { useDeviceList } from '../../state/useDeviceList.hook';
import styles from './Picker.styles';

export const MicrophonePicker = observer(() => {
  const { recordingSettings } = useControllerState();
  const { deviceList } = useDeviceList();
  useEffect(() => {
    return autorun(() => {
      if (
        recordingSettings.selectedAudioDeviceId === null &&
        deviceList.audioInputs[0]
      ) {
        recordingSettings.setSelectedAudioDeviceId(
          deviceList.audioInputs[0].deviceId,
        );
      }
    });
  }, [deviceList.audioInputs, recordingSettings]);
  return (
    <FormControl aria-label="mic picker" css={styles.form}>
      <Select
        value={recordingSettings.selectedAudioDeviceId}
        css={styles.pickerText}
        onChange={(event) => {
          if (event.target.value) {
            recordingSettings.setSelectedAudioDeviceId(event.target.value);
          }
        }}
      >
        {deviceList.audioInputs.map((device) => (
          <MenuItem
            key={device.deviceId}
            value={device.deviceId}
            css={styles.pickerText}
          >
            {device.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});
