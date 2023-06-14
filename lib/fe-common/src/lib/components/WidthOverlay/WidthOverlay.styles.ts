import { css } from '@emotion/react';
import { colors } from '../../globalStyles/colors.styles';

const styles = {
  overlay: css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    /* This z-index is the max allowable because if the conditions 
    occur to render this overlay there should never be anything above it */
    z-index: 2147483647;
    background-color: ${colors.gray[50]};
  `,
  wordMarkContainer: css`
    height: 48px;
    display: flex;
    align-items: flex-start;
    margin-top: 32px;
    margin-left: 23px;
  `,
  wordMark: css`
    width: 204px;
  `,
  content: css`
    text-align: center;
    padding: 36px;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  header: css`
    padding-bottom: 14px;
  `,
};
export default styles;
