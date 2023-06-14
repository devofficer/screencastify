import { Button, SvgIconTypeMap, Tooltip, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import styles from './ControlButton.styles';

interface IControlButtonProps {
  onClick: () => void;
  // eslint-disable-next-line @typescript-eslint/ban-types
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
  color?:
    | 'inherit'
    | 'disabled'
    | 'action'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | undefined;
  toolTipLabel: string;
  buttonLabel: string;
}
export const ControlButton = (props: IControlButtonProps) => {
  return (
    <Tooltip title={props.toolTipLabel} placement="top">
      <Button css={styles.button} onClick={() => props.onClick()}>
        <div css={styles.buttonInnerGray}>
          {props.color ? <props.Icon color={props.color} /> : <props.Icon />}
          <Typography css={styles.buttonLabel}>{props.buttonLabel}</Typography>
        </div>
      </Button>
    </Tooltip>
  );
};
