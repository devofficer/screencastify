import { styleHelpers } from '@castify/fe-common';
import { css } from '@emotion/react';

export const popupStyles = {
  container: css`
    height: 478px;
    width: 431px;
    display: flex;
    flex-direction: column;
  `,
  header: css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  body: css`
    margin-bottom: ${styleHelpers.pxToRem(20)}rem;
    margin-left: ${styleHelpers.pxToRem(20)}rem;
    margin-right: ${styleHelpers.pxToRem(20)}rem;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 100vh;
  `,
  content: css`
    margin-left: ${styleHelpers.pxToRem(20)}rem;
    margin-right: ${styleHelpers.pxToRem(20)}rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${styleHelpers.pxToRem(320)}rem;
    text-align: center;
    gap: ${styleHelpers.pxToRem(20)}rem;
  `,
};

export const regularStyles = {
  container: css`
    height: 60vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  header: css`
    display: flex;
    flex-direction: row;
    height: ${styleHelpers.pxToRem(60)}rem;
    justify-content: space-around;
    align-items: center;
  `,
  body: css`
    margin-bottom: ${styleHelpers.pxToRem(20)}rem;
    margin-left: ${styleHelpers.pxToRem(20)}rem;
    margin-right: ${styleHelpers.pxToRem(20)}rem;
    width: ${styleHelpers.pxToRem(700)}rem;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    height: 100vh;
  `,
  content: css`
    margin-left: ${styleHelpers.pxToRem(20)}rem;
    margin-right: ${styleHelpers.pxToRem(20)}rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: ${styleHelpers.pxToRem(350)}rem;
    text-align: center;
  `,
};
