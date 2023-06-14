import { CastifyLogo, extensionPageStyles } from '@castify/record-mv3/common';
import { Typography } from '@mui/material';
import styles from './RecordingInProgress.styles';

export const RecordingInProgressLayout = () => {
  const Content = () => {
    return (
      <div>
        <div css={styles.contentHeading}>
          <Typography css={styles.contentHeadingMessage} variant="h1">
            Keep this tab open while recording.
          </Typography>
        </div>
        <div css={styles.messageContainer}>
          <Typography css={styles.messageFont} variant="subtitle1">
            This is a recording controller page run by Screencastify.
          </Typography>
          <Typography css={styles.messageFont} variant="subtitle1">
            <span css={styles.redFont}>Do not close this tab</span> during
            recording or all work will be lost.
          </Typography>
        </div>
      </div>
    );
  };

  return (
    <div css={styles.container} data-testid="recording-in-progress-layout">
      <div id="header" css={styles.header}>
        <div css={extensionPageStyles.headerLogo}>
          <CastifyLogo />
        </div>
      </div>
      <div id="content" css={styles.content}>
        <Content />
      </div>
    </div>
  );
};
