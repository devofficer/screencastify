import { CastifyLogo, extensionPageStyles } from '@castify/record-mv3/common';
import PictureInPictureAltIcon from '@mui/icons-material/PictureInPictureAlt';
import { Button, Typography } from '@mui/material';
import styles from './EnablePipLayout.styles';

type EnablePipLayoutProps = {
  canClickButton: boolean;
  onButtonClick: () => void;
};

export const EnablePipLayout = ({
  canClickButton,
  onButtonClick,
}: EnablePipLayoutProps) => {
  return (
    <div css={styles.container} data-testid="enable-pip-layout">
      <div css={extensionPageStyles.headerLogo}>
        <CastifyLogo />
      </div>
      <div id="content" css={styles.content}>
        <PictureInPictureAltIcon fontSize="large" />
        <Typography variant="h2">
          Click the button below to start recording with Pop-out Webcam!
        </Typography>
        <Typography variant="body1">
          Once launched, you’ll be automatically redirected back to your
          original tab.
        </Typography>
        <Button
          disabled={!canClickButton}
          variant="contained"
          size="large"
          onClick={onButtonClick}
          css={styles.button}
          data-testid="start-pip-button"
        >
          {canClickButton ? 'Start Recording' : 'Loading...'}
        </Button>
      </div>
    </div>
  );
};
