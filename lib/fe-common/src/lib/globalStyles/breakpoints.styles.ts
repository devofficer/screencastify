import { st } from '../semanticTypes';

/**
 * These values corresponds to the maximum size of each screen
 */
export const MOBILE_SIZE: st.px = 668;
export const TABLET_SIZE: st.px = 992;
export const LAPTOP_SIZE: st.px = 1312;
export const DESKTOP_SIZE: st.px = 1600;

// returns media query corresponding to: when the browser window is <breakpoint> wide or greater
const greaterThan = (breakpoint: st.px) =>
  `@media (min-width: ${breakpoint}px)`;

/**
 * Breakpoints taken from: https://coder-coder.com/media-query-breakpoints/
 *
 * @example:
 * const styles = {
 * test: css`
 *  color: green;
 *   ${breakpoints.mobile} {
 *     color: gray;
 *   }
 *   ${breakpoints.tablet} {
 *     color: red;
 *   }
 *   ${breakpoints.laptop} {
 *     color: blue;
 *   }
 *`,
};
 */
export const breakpoints = {
  mobile: greaterThan(0),
  tablet: greaterThan(MOBILE_SIZE),
  laptop: greaterThan(TABLET_SIZE),
  desktop: greaterThan(LAPTOP_SIZE),
};
