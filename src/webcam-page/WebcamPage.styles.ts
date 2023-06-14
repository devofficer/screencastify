import { css } from '@emotion/react';
import { colors } from '@castify/fe-common';

const styles = {
  videoContainer: css`
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-width: 70%;
    min-height: 60%;
    max-width: 100vw;
    max-height: 100vh;
  `,
  statusIndicatorContainer: css`
    position: absolute;
    margin-top: 25px;
    margin-left: 15px;
    left: 0px;
    top: 0px;
    height: 35px;
    width: 70px;
  `,
  recordingStatusIndicator: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.error};
  `,
  pauseStatusIndicator: css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a6a6a6;
  `,
  statusIndicatorText: css`
    color: white;
    font-weight: 400;
    font-size: 17.7561px;
    line-height: 143%;
    /* or 25px */

    text-align: center;
    letter-spacing: 0.21561px;
  `,
  videoWrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    min-height: 100%;
    position: relative;
    overflow: hidden;
  `,
  videoWrapperBorder: css`
    box-sizing: border-box;
    border-radius: 8px;
    border: 8px solid white;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  `,
};
export default styles;
