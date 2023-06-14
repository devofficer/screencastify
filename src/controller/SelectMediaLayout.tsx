import { CastifyLogo, extensionPageStyles } from '@castify/record-mv3/common';
import { Typography } from '@mui/material';
import styles from './SelectMediaLayout.styles';

export const SelectMediaLayout = () => {
  return (
    <div css={styles.container} data-testid="select-media-layout">
      <div css={extensionPageStyles.headerLogo}>
        <CastifyLogo />
      </div>
      <div id="content" css={styles.content}>
        <div>
          <div css={styles.contentHeading}>
            <div css={extensionPageStyles.headingText}>
              <Typography
                variant="h1"
                align="center"
                css={extensionPageStyles.headingText}
              >
                <span role="img" aria-label="wave">
                  ☝️
                </span>{' '}
                Select what you&apos;d like to record.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
