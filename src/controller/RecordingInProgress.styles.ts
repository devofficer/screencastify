import { colors, styleHelpers } from '@castify/fe-common';
import { css, SerializedStyles } from '@emotion/react';

interface Styles {
  [key: string]: SerializedStyles;
}

const styles: Styles = {
  container: css`
    width: 100vw;
    min-height: 100vh;
    display: grid;
    grid-template-areas:
      'header'
      'content';
  `,
  content: css`
    grid-area: content;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    height: 100%;
    width: 100vw;
  `,
  contentHeading: css`
    padding-bottom: ${styleHelpers.pxToRem(20)}rem;
    color: ${colors.textPrimary};
  `,
  contentHeadingMessage: css`
    font-family: 'Fellix', 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: ${styleHelpers.pxToRem(34)}rem;
    line-height: 100%;
  `,
  messageContainer: css`
    width: 100%;
    margin-bottom: ${styleHelpers.pxToRem(150)}rem;
  `,
  messageFont: css`
    color: ${colors.actionActive};
    font-family: 'Fellix', 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: ${styleHelpers.pxToRem(20)}rem;
    line-height: 140%;
    color: ${colors.textPrimary};
  `,
  // TODO: add this to colors if Ben's style PR doesn't add it
  redFont: css`
    color: #e81218;
  `,
  header: css`
    grid-area: header;
    position: relative;
    display: flex;
    width: 100%;
    height: ${styleHelpers.pxToRem(60)}rem;
  `,
  headerLogo: css`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding-top: ${styleHelpers.pxToRem(32)}rem;
    padding-left: ${styleHelpers.pxToRem(37)}rem;
  `,
};
export default styles;
