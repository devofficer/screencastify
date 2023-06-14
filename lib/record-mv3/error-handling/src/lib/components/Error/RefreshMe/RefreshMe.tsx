import {
  CastifyLogo,
  ControlPanelHeader,
  extensionPageStyles,
  Oops,
} from '@castify/record-mv3/common';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { popupStyles, regularStyles } from './RefreshMe.style';

export const RefreshMe = () => {
  const isPopup = window.location.pathname === '/initializer.html';
  const styles = isPopup ? popupStyles : regularStyles;
  const logger = createBrowserLogger('RefreshMe');

  useEffect(() => {
    chrome.storage.local.set({ recorderStatus: 'error' });
    logger.info('recorderStatus set to error by RefreshMe error page');

    if (!isPopup) {
      setTimeout(() => {
        window.close();
      }, 10000);
    }
  }, [isPopup, logger]);

  return (
    <Box css={styles.container}>
      {isPopup && (
        <Box css={styles.header}>
          <ControlPanelHeader />
        </Box>
      )}
      {!isPopup && (
        <div css={extensionPageStyles.headerLogo}>
          <CastifyLogo />
        </div>
      )}
      <Box css={styles.content}>
        {isPopup && (
          <Box css={styles.oopsImage}>
            <Oops />
          </Box>
        )}
        {!isPopup && <InfoOutlinedIcon fontSize="large" />}
        <Typography variant="h2" align="center" css={styles.oops}>
          Oops!
        </Typography>
        <Typography variant="body1" align="center" css={styles.message}>
          We are having trouble loading the extension right now. Try restarting
          the extension or{' '}
          <Link
            target="_blank"
            href="https://askcastify.zendesk.com/hc/en-us/articles/7554638182167"
          >
            contacting customer support
          </Link>{' '}
          if this continues.
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
