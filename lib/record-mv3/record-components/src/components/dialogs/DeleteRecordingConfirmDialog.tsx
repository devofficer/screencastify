import { createBrowserLogger } from '@castify/studio/observability/browser';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import styles from './DeleteRecordingConfirmDialog.styles';

interface IDeleteConfirmDialogProps {
  isExtensionPopupView: boolean;
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
}

export const DeleteRecordingConfirmDialog = (
  props: IDeleteConfirmDialogProps,
) => {
  const logger = createBrowserLogger('DeleteRecordingConfirmDialog');
  const { isOpen, onClose } = props;

  logger.info('Delete dialog rendered');

  const DialogInnerContent = () => {
    return (
      <>
        <DialogTitle css={styles.title}>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText css={styles.contentText}>
            Deleting this recording will remove all current video progress and
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions css={styles.actions}>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={props.onClick}>
            Yes, Delete
          </Button>
        </DialogActions>
      </>
    );
  };

  return props.isExtensionPopupView ? (
    <Dialog
      css={styles.container}
      open={isOpen}
      onClose={onClose}
      fullScreen
      hideBackdrop
      disablePortal
    >
      <DialogInnerContent />
    </Dialog>
  ) : (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogInnerContent />
    </Dialog>
  );
};
