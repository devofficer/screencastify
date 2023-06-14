import { usePostMessageAuthClient } from '@castify/studio/auth';
import { Box, Button, Typography } from '@mui/material';
import { ControlPanelHeader } from '../ControlPanelHeader/ControlPanelHeader';
import { SignInImage } from '../PopupImages/SignInImage';
import { popupStyles, regularStyles } from './SignInRequired.styles';

export const SignInRequired: React.FC = () => {
  const isPopup = window.location.pathname === '/initializer.html';
  const authClient = usePostMessageAuthClient();

  return (
    <Box css={isPopup ? popupStyles.container : regularStyles.container}>
      <Box css={isPopup ? popupStyles.header : regularStyles.header}>
        <ControlPanelHeader hideButtons={true} />
      </Box>
      <Box css={isPopup ? popupStyles.body : regularStyles.body}>
        <Box css={isPopup ? popupStyles.content : regularStyles.content}>
          <SignInImage />
          <Typography variant="h4">Hey there!</Typography>
          <Typography variant="body2">
            Sign in or create an account to start recording with Screencastify.
          </Typography>
        </Box>
        <Button
          variant="contained"
          aria-label="Sign In"
          onClick={async () => {
            await authClient.signIn();
          }}
        >
          Sign In
        </Button>
      </Box>
    </Box>
  );
};
