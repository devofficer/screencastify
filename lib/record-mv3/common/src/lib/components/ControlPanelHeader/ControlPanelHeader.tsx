import { environment } from '@castify/record-mv3/environment';
import { safeWindowOpen } from '@castify/safe-window-open';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useRef, useState } from 'react';
import { CastifyLogo } from '../Logo/CastifyLogo';
import styles from './ControlPanelHeader.styles';

type ControlPanelHeaderProps = {
  hideButtons?: boolean;
  freeTierEnabled?: boolean;
};

export const ControlPanelHeader = ({
  hideButtons,
  freeTierEnabled,
}: ControlPanelHeaderProps) => {
  const isStaging = environment.environmentName === 'staging';

  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  /**
   * This element is only used in the extension popup, never any pages.
   * Props applied to the Popper element of the Tooltip to ensure tooltip is placed
   * on top of its reference element, as explicity set in the Tooltip placement props
   * the flip modifier will change the placement of a popper when it's scheduled to overflow a given boundary
   * the offset modifier lets you displace a popper element from its reference element
   * https://popper.js.org/docs/v2/modifiers/
   */
  const popperProps = {
    modifiers: [
      {
        name: 'flip',
        enabled: false,
      },
      {
        name: 'offset',
        options: {
          offset: [0, -15],
        },
      },
    ],
  };

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Toolbar css={styles.header}>
      {isStaging && (
        <Box css={styles.staging}>
          <Typography variant="subtitle2" css={styles.staging}>
            Staging
          </Typography>
        </Box>
      )}
      <CastifyLogo />
      {!hideButtons && (
        <div css={styles.buttonRow}>
          <Tooltip
            title="My Videos"
            placement="bottom"
            PopperProps={popperProps}
          >
            <IconButton
              css={styles.icon}
              data-testid="control-panel-header-my-videos"
              onClick={async () => {
                const myVideosLink = await environment.getExternalLink(
                  'myVideosLink',
                );
                safeWindowOpen(myVideosLink);
              }}
            >
              <VideoLibraryIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Options" placement="bottom" PopperProps={popperProps}>
            <IconButton
              css={styles.icon}
              ref={anchorRef}
              onClick={toggleMenu}
              data-testid="control-panel-header-options"
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>
          <Popper
            sx={{
              zIndex: 100,
            }}
            open={open}
            anchorEl={anchorRef.current}
            transition
            disablePortal
          >
            {({ TransitionProps }) => (
              <Grow {...TransitionProps}>
                <Paper css={styles.menu}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      css={styles.groupButtonContainerMenu}
                      autoFocusItem
                    >
                      <MenuItem
                        key="account"
                        data-testid="kebab-menu-account"
                        onClick={async () => {
                          const accountPage = await environment.getExternalLink(
                            'accountPage',
                          );
                          safeWindowOpen(accountPage);
                        }}
                      >
                        <PersonAddIcon />
                        <span css={styles.menuItemText}>My Account</span>
                      </MenuItem>
                      <MenuItem
                        key="support"
                        data-testid="kebab-menu-support"
                        onClick={async () => {
                          const contactSupportLink =
                            await environment.getExternalLink(
                              'contactSupportLink',
                            );
                          safeWindowOpen(contactSupportLink);
                        }}
                      >
                        <SupportAgentIcon />
                        <span css={styles.menuItemText}>Support</span>
                      </MenuItem>
                      {!hideButtons && freeTierEnabled && (
                        <MenuItem
                          key="premium"
                          disableRipple={true}
                          disableTouchRipple={true}
                          data-testid="kebab-menu-premium"
                          // Disable hover since there's a button here
                          sx={{
                            '&:hover': {
                              backgroundColor: 'transparent',
                            },
                          }}
                        >
                          <Button
                            css={styles.premiumButton}
                            variant="contained"
                            color="warning"
                            onClick={async () => {
                              const pricingPage =
                                await environment.getExternalLink(
                                  'pricingPage',
                                );
                              safeWindowOpen(pricingPage);
                            }}
                          >
                            <WorkspacePremiumIcon />
                            Upgrade
                          </Button>
                        </MenuItem>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      )}
    </Toolbar>
  );
};
