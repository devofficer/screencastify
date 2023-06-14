import { colors } from '@castify/fe-common';
import { css } from '@emotion/react';

const styles = {
  container: css`
    width: 100%;
    height: 100%;
  `,
  containerWithBgColor: css`
    //This is hacky but fixes a bug on webcam page when resizing cam
    width: 100%;
    height: 100%;
    background-color: white;
  `,
  webcamStyle: css`
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
  `,
  circularCamSmall: css`
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scaleX(-1);
  `,
  circularCamLarge: css`
    border-radius: 100%;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transform: scaleX(-1);
  `,
  messageStyle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #455c80;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    object-fit: cover;
    user-select: none;
  `,
  messageStyleSmall: css`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 100%;
    background-color: ${colors.gray[300]};
    min-width: 100%;
    min-height: 100%;
  `,
  messageStyleLarge: css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 100%;
    background-color: #576668;
    opacity: 70%;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  `,
  font: css`
    color: white;
  `,
  smallLogoDimensions: css`
    width: 36px;
    height: 36px;
  `,
  largeLogoDimensions: css`
    width: 100px;
    height: 100px;
  `,
};
export default styles;
