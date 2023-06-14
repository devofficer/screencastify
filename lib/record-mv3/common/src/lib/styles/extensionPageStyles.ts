import { colors, styleHelpers } from '@castify/fe-common';
import { css } from '@emotion/react';

export const extensionPageStyles = {
  headerLogo: css`
    display: flex;
    z-index: 1;
    padding-top: ${styleHelpers.pxToRem(32)}rem;
    padding-left: ${styleHelpers.pxToRem(37)}rem;
  `,
  headingText: css`
    font-family: 'Fellix', 'Source Sans Pro';
    font-size: ${styleHelpers.pxToRem(28)}rem;
    font-weight: 700;
    line-height: 100%;
    color: ${colors.actionActive};
  `,
  subHeadingText: css`
    font-family: 'Fellix', 'Helvetica';
    font-size: ${styleHelpers.pxToRem(16)}rem;
    font-weight: 400;
    line-height: 140%;
    color: ${colors.actionActive};
  `,
};
