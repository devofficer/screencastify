import { css } from '@emotion/react';
import { colors } from './colors.styles';
import { getGlobalFontStyles } from './fontCDNHelper';

export const globals = css`
  body {
    margin: 0;
    // prevents accidental user selection of text during drags
    // text boxes and inputs should opt-in to user select where needed
    user-select: none;
    background-color: ${colors.gray['50']};
    a {
      color: ${colors.primary};
    }
    .sr-only {
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
  }

  ${getGlobalFontStyles()}
`;
