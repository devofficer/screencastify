import { styleHelpers } from './helpers.styles';

const textPrimary = '#212121';
const textSecondary = '#616161';
const textDisabled = '#757575';
const lilac = '#DCD0FF';
const white = '#FFFFFF';

export const colors = {
  // Colors here are mapping to what MUI will eventually expect
  gray: {
    900: textPrimary,
    800: '#424242',
    700: textSecondary,
    600: textDisabled,
    500: '#9E9E9E',
    400: '#BDBDBD',
    300: '#E0E0E0',
    200: '#EEEEEE',
    100: '#F5F5F5',
    50: '#FAFAFA',
    0: white,
  },
  /**
   * MUI Main Colors
   */
  primary: '#0043FE', // Screencastify Blue
  primaryContrastText: white,

  secondary: '#BA00FE', // Screencastify Purple

  error: '#E81218', // Light Red

  warning: '#FFC107', // Light Orange
  warningDark: '#DD7A1F', // Dark Orange

  textSecondary,
  info: '#424242',

  textDisabled,

  infoDark: '#EEEEEE',
  infoTextContrast: white,

  success: '#3CCC6C', // Green
  successTextContrast: white,

  /**
   * MUI Text Colors
   */
  textPrimary,
  actionActive: textPrimary,

  lilac,
  lilacSeethru: styleHelpers.hexToRgba(lilac, 0.2),
};
