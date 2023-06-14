import { v4 as uuidv4 } from 'uuid';

// studio
export const getAnonymousUserIdentifier = (): string => {
  return (
    sessionStorage.getItem('userIdentifier') || setAnonymousUserIdentifier()
  );
};

const setAnonymousUserIdentifier = (): string => {
  const userIdentifier = uuidv4();
  sessionStorage.setItem('userIdentifier', userIdentifier);
  return userIdentifier;
};

/**
 * extension is a distributed system that doesn't share sessionStorage context, however,
 * chrome.storage.session does share context among these browser components, use the following
 * for the extension if data needs to be stored and shared.
 * @returns A Promise that resolves with a string
 */
export const getAnonymousUserIdentifierAsync = async (): Promise<string> => {
  const chromeRuntimeAvailable = 'chrome' in window && 'storage' in chrome;
  // @ts-expect-error This property is set by us elsewhere
  if (!chromeRuntimeAvailable || !window.CFY_INSTALLED) return;

  const { userIdentifier } = await chrome.storage.session.get();
  return userIdentifier || setAnonymousUserIdentifierAsync();
};

const setAnonymousUserIdentifierAsync = async (): Promise<string> => {
  const chromeRuntimeAvailable = 'chrome' in window && 'storage' in chrome;
  // @ts-expect-error This property is set by us elsewhere
  if (!chromeRuntimeAvailable || !window.CFY_INSTALLED) return;

  const userIdentifier = uuidv4();
  await chrome.storage.session.set({ userIdentifier });
  return userIdentifier;
};

/*
 * We use session storage to track if a possibly unauthenticated user has clicked
 * the view-page-sign-up-cta. This will be tracked by pendo if/when the user logs
 * in. Putting it here to keep all of the session storage access in one place.
 */
const clickedSignUpCTAKey = 'view-page-sign-up-cta-button-clicked';

export const setClickedSignUpCTA = (): void => {
  sessionStorage.setItem(clickedSignUpCTAKey, 'true');
};

export const getAndResetClickedSignUpCTA = (): boolean => {
  const viewPageSignUpCtaButtonClicked = Boolean(
    sessionStorage.getItem(clickedSignUpCTAKey),
  );
  if (viewPageSignUpCtaButtonClicked) {
    sessionStorage.removeItem(clickedSignUpCTAKey);
  }
  return viewPageSignUpCtaButtonClicked;
};
