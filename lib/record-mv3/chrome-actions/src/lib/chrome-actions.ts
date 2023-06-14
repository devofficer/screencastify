const DEFAULT_ICON_PATH = 'assets/images/default-icon48.png';
const PAUSED_ICON_PATH = 'assets/images/paused-icon.png';
const RECORDING_ICON_PATH = 'assets/images/recording-icon.png';

const RECORDING_ICON_PATH_COUNT_IN_THREE =
  'assets/images/logo-counting-in-3.png';
const RECORDING_ICON_PATH_COUNT_IN_TWO = 'assets/images/logo-counting-in-2.png';
const RECORDING_ICON_PATH_COUNT_IN_ONE = 'assets/images/logo-counting-in-1.png';

type recordingState =
  | 'initialized'
  | 'counting-in'
  | 'recording'
  | 'paused'
  | 'stopped'
  | 'error'
  | undefined;

export function setExtensionIcon(state: recordingState): void {
  switch (state) {
    case 'paused':
      return chrome.action.setIcon({ path: PAUSED_ICON_PATH });
    case 'recording':
      return chrome.action.setIcon({
        path: RECORDING_ICON_PATH,
      });
    default:
      return chrome.action.setIcon({ path: DEFAULT_ICON_PATH });
  }
}

export function setExtensionIconWhileCountingIn(time: number) {
  switch (time) {
    case 3: {
      return chrome.action.setIcon({
        path: RECORDING_ICON_PATH_COUNT_IN_THREE,
      });
    }
    case 2: {
      return chrome.action.setIcon({
        path: RECORDING_ICON_PATH_COUNT_IN_TWO,
      });
    }
    case 1: {
      return chrome.action.setIcon({
        path: RECORDING_ICON_PATH_COUNT_IN_ONE,
      });
    }
    default: {
      return chrome.action.setIcon({ path: DEFAULT_ICON_PATH });
    }
  }
}
