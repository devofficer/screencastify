import { hexToRgb } from '@mui/system';

const baseFontSize = 16;
const baseSpacingSize = baseFontSize / 4;
const pxToRem = (px: number) => px / baseFontSize;

/**
 * Function to convert a hex value to rgb notation including a given alpha.
 * Used to make backgrounds transparent independent of their content.
 */
function hexToRgba(color: string, opacity: number) {
  const rgbString = hexToRgb(color);
  return `${rgbString.slice(0, rgbString.length - 1)}, ${opacity})`;
}

const sizeAndSpaceCalc = (pixels: number): string => {
  // TODO: Add this in when we convert things over
  // if(pixels % 4 !== 0) throw new Error("All things need to be a multiple of 4")
  return `${pxToRem(pixels)}rem`;
};

export const styleHelpers = {
  baseFontSize,
  baseSpacingSize,
  pxToRem,
  hexToRgba,
  spacing: sizeAndSpaceCalc,
  sizing: sizeAndSpaceCalc,
};
