import {
  CastifyLogo,
  ControlPanelHeader,
  NoWifi,
} from '@castify/record-mv3/common';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { popupStyles, regularStyles } from './ConnectionError.styles';

export const ConnectionError = () => {
  const isPopup = window.location.pathname === '/initializer.html';
  const styles = isPopup ? popupStyles : regularStyles;

  useEffect(() => {
    if (!isPopup) {
      setTimeout(() => {
        window.close();
      }, 10000);
    }
  }, [isPopup]);

  return (
    <Box css={styles.container}>
      {!isPopup && (
        <div css={regularStyles.headerLogo}>
          <CastifyLogo />
        </div>
      )}
      {isPopup && (
        <Box css={styles.header}>
          <ControlPanelHeader hideButtons={true} />
        </Box>
      )}
      <Box css={styles.content}>
        {isPopup && (
          <Box css={styles.logo}>
            <NoWifi />
          </Box>
        )}

        {!isPopup && (
          <WifiOffIcon
            css={regularStyles.wifiOffIcon}
            fontSize="large"
          ></WifiOffIcon>
        )}
        <Typography variant="h2" css={styles.offline}>
          You are offline
        </Typography>
        <Typography
          variant="body1"
          align={isPopup ? 'inherit' : 'center'}
          css={styles.message}
        >
          No worries - your video will be ready to upload once you are back
          online. Try reopening the extension once you are back online.
        </Typography>
        {!isPopup && (
          <Typography variant="body1" align="center" css={styles.message}>
            This page will close in 10 seconds.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
