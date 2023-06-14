import { css } from '@emotion/react';

const styles = {
  controls: css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 346px;
    height: 66px;
    background: #ffffff;
    margin-top: 40px;
    margin-bottom: 40px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
  `,
  leftContainer: css`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    // Stops changing numbers in timestamp from resizing the controls
    min-width: 100px;
  `,
  verticalBar: css`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-right: 10px;
    border-left: 2px solid #c4c4c4;
    height: 41.5px;
  `,
};
export default styles;
