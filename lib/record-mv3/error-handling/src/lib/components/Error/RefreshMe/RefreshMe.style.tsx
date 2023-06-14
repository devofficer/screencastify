import { colors, styleHelpers } from '@castify/fe-common';
import { css } from '@emotion/react';

export const popupStyles = {
  container: css`
    width: ${styleHelpers.pxToRem(431)}rem;
    height: ${styleHelpers.pxToRem(478)}rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  header: css`
    display: flex;
    flex-direction: row;
    margin: 0 ${styleHelpers.pxToRem(5)}rem;
    width: 100%;
  `,
  headerLogo: css``,
  content: css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  oops: css`
    font-family: 'Fellix', 'Source Sans Pro';
    font-size: ${styleHelpers.pxToRem(28)}rem;
    font-weight: 700;
    line-height: 100%;
    color: ${colors.actionActive};
  `,
  message: css`
    font-family: 'Fellix', 'Helvetica';
    font-size: ${styleHelpers.pxToRem(16)}rem;
    font-weight: 400;
    line-height: 140%;
    color: ${colors.actionActive};

    padding-top: ${styleHelpers.pxToRem(20)}rem;
    max-width: 431px;
    padding-left: ${styleHelpers.pxToRem(30)}rem;
    padding-right: ${styleHelpers.pxToRem(30)}rem;

    text-align: center;
    z-index: 1;
  `,
  link: css`
    color: ${colors.primary};
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  `,
  oopsImage: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${styleHelpers.pxToRem(270)}rem;
    margin-bottom: ${styleHelpers.pxToRem(64)}rem;
  `,
};

export const regularStyles = {
  container: css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  `,
  header: css``,
  headerLogo: css`
    display: flex;
    z-index: 1;
    padding-top: ${styleHelpers.pxToRem(32)}rem;
    padding-left: ${styleHelpers.pxToRem(37)}rem;
  `,
  content: css`
    margin-top: ${styleHelpers.pxToRem(300)}rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  oops: css`
    font-family: 'Fellix', 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: ${styleHelpers.pxToRem(34)}rem;
    line-height: 100%;
    color: ${colors.textPrimary};

    margin-top: ${styleHelpers.pxToRem(30)}rem;
  `,
  message: css`
    font-family: 'Fellix', 'Helvetica';
    font-style: normal;
    font-weight: 400;
    font-size: ${styleHelpers.pxToRem(16)}rem;
    line-height: 140%;
    color: ${colors.textPrimary};

    margin-top: ${styleHelpers.pxToRem(20)}rem;
    word-wrap: normal;
    max-width: ${styleHelpers.pxToRem(466)}rem;
  `,
  link: css`
    color: ${colors.primary};
    text-decoration: underline;

    &:hover {
      cursor: pointer;
    }
  `,
  oopsImage: css``,
};
