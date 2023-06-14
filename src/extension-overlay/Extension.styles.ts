import { colors } from '@castify/fe-common';
import { css } from '@emotion/react';

const styles = {
  containerRecording: css`
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 2147483647;
  `,
  enablePointerEvents: css`
    pointer-events: auto;
  `,
  countInOverlay: css`
    width: 100vw;
    z-index: 1;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
  `,
  countInCircle: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 271px;
    width: 271px;
    border-radius: 150px;
    background: rgba(0, 0, 0, 0.5);
  `,
  countInText: css`
    font-family: 'Fellix', 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 116.7%;
  `,
  webcamOuterContainer: (translate?: string) => {
    //after a drag occurs one time we will use this styling
    if (translate !== undefined) {
      return css`
        position: fixed;
        bottom: 45px;
        left: 10px;
        ${translate}
        z-index: 2147483646;
        height: 302px;
        width: 302px;
        pointer-events: auto;
        cursor: grabbing;
      `;
    }

    //defualt styles for the webcam
    return css`
      position: fixed;
      bottom: 45px;
      left: 10px;
      z-index: 2147483646;
      height: 302px;
      width: 302px;
      margin-top: 12px;
      pointer-events: auto;
      cursor: grabbing;
    `;
  },
  webcamOuterContainerLarge: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 2147483646;
    pointer-events: auto;
  `,
  webcamInnerContainer: (isLargeWebcam: boolean) => {
    if (isLargeWebcam) {
      return css`
        display: block;
        height: fit-content;
        width: fit-content;
      `;
    } else {
      return css`
        display: block;
        height: 100%;
        width: 100%;
      `;
    }
  },
  webcam: css`
    z-index: 2147483646;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: white solid 5px;
    border-radius: 200px;
    justify-content: center;
    margin: 0;
    padding: 0;
    display: block;
    pointer-events: none;
  `,
  webcamLarge: css`
    z-index: 2147483646;
    height: max(45vh, 45vw);
    width: max(45vh, 45vw);
    box-sizing: border-box;
    border: white solid 5px;
    border-radius: calc(max(45vh, 45vw) / 2);
    pointer-events: none;
  `,
  resizableButtonContainer: css`
    z-index: 2147483647;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  `,
  resizeWebcamButton: css`
    position: absolute;
    background-color: ${colors.gray[0]};
    top: 12px;
  `,
  drawingTools: css`
    z-index: 2147483647;
    pointer-events: auto;
    position: fixed;
    bottom: 10px;
  `,
  freeTierRecordingAlert: css`
    z-index: 2147483646;
    pointer-events: auto;
    position: fixed;
    bottom: 100px;
    width: 100%;
  `,
};

export default styles;
