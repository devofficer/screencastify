import { colors } from '@castify/fe-common';
import { css } from '@emotion/react';

const styles = {
  // This is currently only used in the webcam recording page
  controllerContainer: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(
      113.01deg,
      ${colors.secondary} -10.12%,
      ${colors.primary} 100.26%
    );
  `,
};
export default styles;
