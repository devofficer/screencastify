import { useEffect } from 'react';
import { createCtx } from '@castify/fe-common';
import {
  UserInfo,
  userInfoFromGoogleUser,
} from '../gapiUtils/userInfoFromGoogleUser';

import { useGoogleAuthLoader } from './useGoogleAuthLoader';
import { useForceUpdate } from '../useForceUpdate';

const [useInstance, Provider] =
  createCtx<gapi.auth2.GoogleAuth>('GoogleAuthInstance');

export const useGoogleAuthInstance = useInstance;

/**
 * Hook returning gapi.auth2.GoogleAuth signIn function.
 * Calling this function directly will not track state or errors.
 * Should only be used within @castify/studio/auth.
 * use the hooks provided by AuthenticatorProvider instead
 */
export const useUntrackedSignIn = () => {
  const instance = useInstance();
  return () => instance.signIn();
};
/**
 * Hook returning gapi.auth2.GoogleAuth signOut function.
 * Calling this function directly will not track state or errors.
 * Should only be used within @castify/studio/auth.
 * use the hooks provided by AuthenticatorProvider instead*
 */
export const useUntrackedSignOut = () => {
  const instance = useInstance();
  return () => instance.signOut();
};

/**
 * Hook returning a sub-set of information from the google user basic profile.
 *
 * Can ONLY be called within the context of a AuthInstanceProvider.
 */
export const useUserProfile = (): UserInfo => {
  const maybeSignedInUser = useInstance().currentUser.get();
  return userInfoFromGoogleUser(maybeSignedInUser);
};

/**
 * Hook returning either an instance of gapi.auth2.GoogleUser or undefined
 * depending on whether or not there is a logged in user.
 */
export const useLoggedInGoogleUser = (): gapi.auth2.GoogleUser | undefined => {
  const authInstance = useInstance();
  return authInstance.isSignedIn.get()
    ? authInstance.currentUser.get()
    : undefined;
};

/**
 * This provider is responsible for initiating a singleton session instance and
 * providing it via context to the rest of the application.
 */
export const GoogleAuthInstanceProvider: React.FC<{
  loadingElement: React.ReactElement;
}> = (props) => {
  const { authInstance, authInstanceLoading, authInstanceError } =
    useGoogleAuthLoader();

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (!authInstance) {
      return;
    }
    const authListener = authInstance.isSignedIn.listen(forceUpdate);
    return () => {
      // @ts-expect-error authListener type is void | undefined, but it appears there are
      // unytped methods to remove the listener.
      authListener?.remove?.();
    };
  }, [authInstance, forceUpdate]);

  if (authInstanceLoading) {
    return props.loadingElement;
  }

  if (authInstanceError) {
    throw authInstanceError;
  }

  return <Provider value={authInstance}>{props.children}</Provider>;
};

export { Provider as RawProvider };
