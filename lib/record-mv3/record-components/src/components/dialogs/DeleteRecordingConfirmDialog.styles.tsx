import { colors } from '@castify/fe-common';
import { css } from '@emotion/react';

const styles = {
  container: css`
    padding: 0px;
    width: 294px;
    height: 190px;
  `,
  title: css`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Fellix', 'Source Sans Pro';
    color: ${colors.textPrimary};
    padding-bottom: 7px;
  `,
  contentText: css`
    font-size: 0.875rem;
    font-weight: 300;
    color: ${colors.textPrimary};
    line-height: 16px;
  `,
  actions: css`
    padding-bottom: 24px;
    padding-right: 21px;
  `,
};

export default styles;
