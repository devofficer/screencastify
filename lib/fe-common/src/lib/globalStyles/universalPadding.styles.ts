import { css } from '@emotion/react';

export const styles = {
  universalPadding: css`
    @media screen and (min-width: 1440px) {
      padding-left: 10vw;
      padding-right: 10vw;
    }
    @media screen and (max-width: 1439px) and (min-width: 992px) {
      padding-left: 5vw;
      padding-right: 5vw;
    }
  `,
};
