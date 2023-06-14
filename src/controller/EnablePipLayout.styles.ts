import { css } from '@emotion/react';

const styles = {
  container: css`
    position: relative;
    width: 100%;
    // 100vw here creates scroll bars
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
  `,
  content: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 24px;
    flex-grow: 2;
  `,
  button: css`
    width: 300px;
  `,
};
export default styles;
