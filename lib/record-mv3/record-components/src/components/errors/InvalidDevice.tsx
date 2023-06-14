import { ErrorOutline } from '@mui/icons-material';
import { Typography } from '@mui/material';
import styles from './InvalidDevice.styles';
import InvalidDeviceTooltip from './InvalidDeviceTooltip';

export const InvalidDevice = () => {
  return (
    <InvalidDeviceTooltip
      title="This device is invalid and will not work in your recording."
      placement="top"
    >
      <div css={styles.errorTextContainer}>
        <ErrorOutline color="error" css={styles.icon} />
        <Typography css={styles.errorText} color="error" variant="body2">
          Invalid Device
        </Typography>
      </div>
    </InvalidDeviceTooltip>
  );
};
