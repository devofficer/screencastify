import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';

// This is mostly copy/pasted from the MUI docs on custom width tooltips
// https://mui.com/material-ui/react-tooltip/#variable-width

const InvalidDeviceTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
    fontSize: 11,
  },
});

export default InvalidDeviceTooltip;
