import { styleHelpers } from '@castify/fe-common';
import { css } from '@emotion/react';

const { pxToRem } = styleHelpers;

const styles = {
  header: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 18px 25px 0 25px;
  `,
  buttonRow: css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: flex-end;
  `,
  icon: css`
    color: #424242;
  `,
  // Staging notice for development
  staging: css`
    font-size: ${pxToRem(12)}rem;
    line-height: ${pxToRem(12)}rem;
    text-align: right;
    padding-right: ${pxToRem(12)}rem;
    z-index: 10;
    position: absolute;
    top: 8px;
    left: 36px;
  `,
  menu: css`
    width: 320px;
    border-radius: 8px;
    padding-top: 12px;
    padding-bottom: 12px;
  `,
  groupButtonContainerMenu: css`
    // Styles each menuItem in the menu
    .MuiMenuItem-root {
      display: flex;
      flex-direction: row;
      gap: ${styleHelpers.pxToRem(32)}rem;
    }
  `,
  premiumButton: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8px;

    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  `,
  menuItemText: css`
    font-family: 'Fellix', 'Roboto';
    font-weight: 400;
  `,
};
export default styles;
