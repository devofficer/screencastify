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
    height: ${styleHelpers.pxToRem(60)}rem;
    justify-content: space-between;
    align-items: center;
    padding: 18px 25px 0 25px;
  `,
  headerLogo: css`
    display: flex;
    z-index: 1;
    // Keep the logo aligned so it doesn't move when
    // the popup finishes loading
    padding-top: 4px;
    padding-left: 5px;
  `,
  headerSkeletonContainer: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
  `,
  body: css`
    margin: ${styleHelpers.pxToRem(20)}rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    height: 100vh;
  `,
  middle: css`
    margin-left: ${styleHelpers.pxToRem(20)}rem;
    margin-right: ${styleHelpers.pxToRem(20)}rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: ${styleHelpers.pxToRem(40)}rem;
  `,
};
