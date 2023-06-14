import { css, SerializedStyles } from '@emotion/react';

interface Styles {
  [key: string]: SerializedStyles;
}

// Height of the chrome pop up
const selectScreenPopupHeight = 624;
const idealMessagePositionUnderPopup = selectScreenPopupHeight + 128;

const styles: Styles = {
  container: css`
    position: relative;
    width: 100vw;
    min-height: 100vh;
  `,
  content: css`
    /* 
    * Responsively keeps the message between the ideal height and 
    * the hardcoded height of the chrome media selector pop-up to 
    * when on smaller displays. 
    * On most screens, it will just be positioned at the ideal height.
    */
    top: max(
      ${selectScreenPopupHeight}px,
      min(calc(100vh - 3rem), ${idealMessagePositionUnderPopup}px)
    );
    left: 0;
    right: 0;
    position: absolute;

    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
};
export default styles;
