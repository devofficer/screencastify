import { css } from '@emotion/react';
import { colors } from '@castify/fe-common';

const styles = {
  outerContainer: css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  innerContainer: css`
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `,
  line: css`
    background: ${colors.gray[800]};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.25rem;
    color: ${colors.primaryContrastText};
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  `,
  link: css`
    font-family: 'Fellix', 'Helvetica';
    color: ${colors.secondary};
    &:hover {
      cursor: pointer;
    }
  `,
  closeIcon: css`
    &:hover {
      background-color: ${colors.gray[500]};
      border-radius: 1rem;
      cursor: pointer;
    }
  `,
};
export default styles;
