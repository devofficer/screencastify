import { FormControl, MenuItem, Select } from '@mui/material';
import { autorun } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useControllerState } from '../../state/ControllerStateProvider';
import { useDeviceList } from '../../state/useDeviceList.hook';
import styles from './Picker.styles';

export const CameraPicker = observer(() => {
  const { recordingSettings } = useControllerState();
  const { deviceList } = useDeviceList();

  useEffect(() => {
    return autorun(() => {
      if (
        recordingSettings.selectedVideoDeviceId === null &&
        deviceList.videoInputs[0]
      ) {
        recordingSettings.setSelectedVideoDeviceId(
          deviceList.videoInputs[0].deviceId,
        );
      }
    });
  }, [deviceList.videoInputs, recordingSettings]);
  return (
    <FormControl aria-label="camera picker" css={styles.form}>
      <Select
        value={recordingSettings.selectedVideoDeviceId}
        disabled={deviceList.videoInputs.length <= 0}
        css={styles.pickerText}
        onChange={(event) => {
          if (event.target.value) {
            recordingSettings.setSelectedVideoDeviceId(event.target.value);
          }
        }}
      >
        {deviceList.videoInputs.map((device) => (
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
