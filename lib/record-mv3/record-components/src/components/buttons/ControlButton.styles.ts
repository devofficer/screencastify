import { css } from '@emotion/react';

const styles = {
  button: css`
    padding: 0px;
    max-height: 47px;
    max-width: 47px;
    min-width: 47px;
    margin-right: 10px;
    &:hover {
      background-color: #e5e5e5;
      border-radius: 8px;
    }
  `,
  buttonLabel: css`
    font-size: 0.625rem;
  `,

  buttonInnerGray: css`
    display: flex;
    color: #4f4f4f;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};
export default styles;
