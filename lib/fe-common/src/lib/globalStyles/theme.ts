import { createTheme } from '@mui/material/styles';
import {
  DESKTOP_SIZE,
  LAPTOP_SIZE,
  MOBILE_SIZE,
  TABLET_SIZE,
} from './breakpoints.styles';
import { colors } from './colors.styles';
import { fonts } from './fonts.styles';
import { styleHelpers } from './helpers.styles';
import { whiteButton } from './variants/whiteButton';

const { pxToRem, baseSpacingSize, sizing } = styleHelpers;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    hero: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    hero?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero: true;
  }
}

// MUI theme implementation
// https://mui.com/customization/theming/
const theme = createTheme({
  spacing: baseSpacingSize,
  typography: {
    // This changes the font of all MUI components to Fellix
    allVariants: {
      fontFamily: `${fonts.sansSerifVariation1}`,
    },
    hero: {
      fontSize: `${pxToRem(44)}rem`,
      fontFamily: `${fonts.sansSerifVariation2}`,
      fontWeight: 900,
      lineHeight: `${sizing(13)}`,
    },
  },
  // https://mui.com/customization/palette/
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.primaryContrastText,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
      dark: colors.warningDark,
    },
    info: {
      main: colors.info,
    },
    success: {
      main: colors.success,
      contrastText: colors.successTextContrast,
    },
  },
  // https://mui.com/customization/breakpoints/
  breakpoints: {
    values: {
      xs: 0,
      sm: MOBILE_SIZE,
      md: TABLET_SIZE,
      lg: LAPTOP_SIZE,
      xl: DESKTOP_SIZE,
    },
  },
  // custom component styling and default props
  // https://mui.com/customization/theme-components/
  components: {
    MuiButton: {
      variants: [whiteButton],
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          height: '48px',
          fontFamily: fonts.sansSerifVariation1,
          fontSize: `${pxToRem(16)}rem`,
          fontWeight: 700,
          textTransform: 'none',
          maxHeight: `${pxToRem(40)}rem`,
          minHeight: `${pxToRem(40)}rem`,
          borderRadius: '40px', // px instead of rem for border radiuses
        },
        sizeLarge: {
          lineHeight: 'auto',
        },
        sizeMedium: {
          lineHeight: `${pxToRem(24)}rem`,
        },
        sizeSmall: {
          lineHeight: `${pxToRem(22)}rem`,
          padding: 0,
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: 'bottom',
      },
      styleOverrides: {
        tooltip: {
          fontFamliy: fonts.sansSerifVariation1,
          fontWeight: 'normal',
          fontSize: `${pxToRem(14)}rem`,
          lineHeight: `${pxToRem(14)}rem`,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: fonts.sansSerifVariation2,
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: `${pxToRem(44)}rem`,
          lineHeight: '100%',
        },
        h2: {
          fontFamily: fonts.sansSerifVariation2,
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: `${pxToRem(34)}rem`,
          lineHeight: '100%',
        },
        h3: {
          fontFamily: fonts.sansSerifVariation2,
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: `${pxToRem(28)}rem`,
          lineHeight: '100%',
        },
        h4: {
          fontFamily: fonts.sansSerifVariation2,
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: `${pxToRem(24)}rem`,
          lineHeight: '100%',
        },
        h5: {
          fontFamily: fonts.sansSerifVariation2,
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: `${pxToRem(20)}rem`,
          lineHeight: '100%',
        },
        body1: {
          fontFamily: fonts.sansSerifVariation1,
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: `${pxToRem(16)}rem`,
          lineHeight: '140%',
        },
        body2: {
          fontFamily: fonts.sansSerifVariation1,
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: `${pxToRem(14)}rem`,
          lineHeight: '140%',
        },
        subtitle1: {
          fontFamily: fonts.sansSerifVariation1,
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: `${pxToRem(20)}rem`,
          lineHeight: '140%',
        },
        subtitle2: {
          fontFamily: fonts.sansSerifVariation1,
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: `${pxToRem(18)}rem`,
          lineHeight: '140%',
        },
        caption: {
          fontFamily: fonts.sansSerifVariation2,
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: `${pxToRem(12)}rem`,
          lineHeight: '140%',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: fonts.sansSerifVariation2,
          fontWeight: 'normal',
          fontSize: `${pxToRem(16)}rem`,
          lineHeight: `${pxToRem(24)}rem`,
          letterSpacing: '0.15px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: fonts.sansSerifVariation2,
          fontWeight: 'normal',
          fontSize: `${pxToRem(12)}rem`,
          lineHeight: `${pxToRem(20)}rem`,
          letterSpacing: '0.4px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // PX instead of EM because I think we always want this to be a hard value
          padding: '16px 24px 24px 24px',
        },
      },
    },
    MuiDialogTitle: {
      defaultProps: {
        sx: {
          typography: 'h3',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: fonts.sansSerifVariation1,
          fontWeight: 'normal',
          fontSize: `${pxToRem(13)}rem`,
          lineHeight: `${pxToRem(18)}rem`,
          letterSpacing: '0.16px',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontFamliy: fonts.sansSerifVariation2,
          fontWeight: 700,
          fontSize: `${pxToRem(12)}rem`,
          lineHeight: `${pxToRem(20)}rem`,
          letterSpacing: `0.14px`,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: `8px`,
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontFamliy: fonts.sansSerifVariation2,
          fontWeight: 700,
          fontSize: `${pxToRem(16)}rem`,
          lineHeight: `150%`,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'none',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          borderRadius: `8px`,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: `8px`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
  },
});

export default theme;
