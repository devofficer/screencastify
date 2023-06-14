import { colors, styleHelpers } from '@castify/fe-common';
import { css } from '@emotion/react';

export const popupStyles = {
  container: css`
    width: ${styleHelpers.pxToRem(431)}rem;
    height: ${styleHelpers.pxToRem(478)}rem;
    min-height: ${styleHelpers.pxToRem(478)}rem;
    display: flex;
    flex-direction: column;
  `,
  header: css`
    justify-content: center;
    align-items: center;
  `,
  content: css`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  offline: css`
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
    word-wrap: normal;
    text-align: center;
    margin-top: ${styleHelpers.pxToRem(20)}rem;
    padding-left: ${styleHelpers.pxToRem(30)}rem;
    padding-right: ${styleHelpers.pxToRem(30)}rem;
  `,
  logo: css`
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
  `,
  header: css`
    display: hidden;
  `,
  headerLogo: css`
    display: flex;
    z-index: 1;
    padding-top: ${styleHelpers.pxToRem(14)}rem;
    padding-left: ${styleHelpers.pxToRem(29)}rem;
  `,
  content: css`
    margin-top: ${styleHelpers.pxToRem(300)}rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${styleHelpers.pxToRem(20)}rem;
  `,
  offline: css`
    font-family: 'Fellix', 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    font-size: ${styleHelpers.pxToRem(34)}rem;
    line-height: 120%;
    color: ${colors.textPrimary};
    text-align: center;
  `,
  message: css`
    max-width: ${styleHelpers.pxToRem(500)}rem;
    font-size: ${styleHelpers.pxToRem(16)}rem;
    font-weight: 400;
    font: Helvetica;
    word-wrap: normal;
  `,
  logo: css``,
  wifiOffIcon: css`
    padding-bottom: ${styleHelpers.pxToRem(16)}rem;
  `,
};
