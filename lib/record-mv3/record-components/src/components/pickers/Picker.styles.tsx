import { colors, styleHelpers } from '@castify/fe-common';
import { css } from '@emotion/react';

const pickerFontStyles = `font-family: 'Fellix', 'Roboto', 'Helvetica'; font-weight: 300; color: ${colors.textPrimary};`;
const styles = {
  form: css`
    width: 100%;
    // Stop webcam selector from getting too big
    max-width: ${styleHelpers.pxToRem(200)}rem;

    .MuiInput-root {
      width: 100%;
      ${pickerFontStyles};
    }
  `,
  pickerText: css`
    ${pickerFontStyles};
  `,
};

export default styles;
