import { colors } from '@castify/fe-common';
import { css } from '@emotion/react';
import { switchTypes } from './Switches';

const styles = (
  type: keyof typeof switchTypes,
  isEnabled: { isEnabled: boolean },
) =>
  css`
    width: 77px;
    margin: 10px 5px 10px 0;
    height: 39px;
    padding: 0px;
    background: #efefef;
    ${isEnabled &&
    `
      background-color: #fbfbfb;
    `}
    border-radius: 26.5px;
    .MuiSwitch-switchBase {
      height: 100%;
      color: #fff;
      margin: 0px;
      padding: 3px 3px;
      transform: translateX(0px);
      transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      &.Mui-checked {
        transform: translateX(37px);
        color: ${colors.primary};

        & + .MuiSwitch-track {
          background: transparent;
          opacity: unset;

          &:before {
            left: 10px;
            background-image: url('data:image/svg+xml;utf8,${switchTypes[type]
              .checkedSwitchBefore}');
          }

          &:after {
            right: 10px;
            background-image: url('data:image/svg+xml;utf8,${switchTypes[type]
              .checkedSwitchAfter}');
            transition: background 1s ease;
          }
        }

        &:hover {
          & + .MuiSwitch-track {
            background: transparent;
            opacity: unset;

            &:after {
              right: 10px;
              background-image: url('data:image/svg+xml;utf8,${switchTypes[type]
                .checkedSwitchHoverAfter}');
            }
          }
        }
      }

      &: hover {
        & + .MuiSwitch-track {
          &:before {
            left: 10px;
            background-image: url('data:image/svg+xml;utf8,${switchTypes[type]
              .switchHoverBefore}');
          }
          &:after {
            right: 10px;
            background-image: url('data:image/svg+xml;utf8,${switchTypes[type]
              .switchHoverAfter}');
          }
        }
      }
    }

    .MuiSwitch-thumb {
      width: 34px;
      height: 100%;
      box-shadow: 0px 0px 4px rgb(0 0 0 / 29%);
    }

    .MuiSwitch-track {
      border-radius: 26px;
      z-index: 10;
      background: transparent;
      pointer-events: none;
      opacity: 1;
      border: solid 1px #c9c9c9;
      height: 37px;
      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 25%;
        width: 20px;
        height: 20px;
        background-position: center;
        background-repeat: no-repeat;
      }
      &:before {
        left: 10px;
        background-image: url('data:image/svg+xml;utf8,${switchTypes[type]
          .switchBefore}');
      }

      &:after {
        right: 10px;
        background-image: url('data:image/svg+xml;utf8,${switchTypes[type]
          .switchAfter}');
      }
    }
  `;

export default styles;
