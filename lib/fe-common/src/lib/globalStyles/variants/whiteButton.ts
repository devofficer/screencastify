import { ButtonProps, CSSInterpolation } from '@mui/material';
import { colors } from '../colors.styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    white: true;
  }
}

/**
 * A white button variant because MUI doesn't have white background on buttons, only transparent and colored
 */
export const whiteButton: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: Partial<ButtonProps<'button', {}>>;
  style: CSSInterpolation;
} = {
  props: { variant: 'white' },
  style: {
    textTransform: 'none',
    background: 'white',
    color: colors.primary,
    ':hover': {
      background: colors.gray[200],
    },
  },
};
