import React, { useCallback } from 'react';
import { createCtx } from '@castify/fe-common';
import { ExtensionAuthMessaging } from './ExtensionAuthMessaging';
import { useLoggedInGoogleUser } from './GoogleAuthInstanceProvider/GoogleAuthInstanceProvider';
import { accessTokenForGoogleUser } from './gapiUtils/accessTokenForGoogleUser';
import { useCleverInstance } from './CleverAuthProvider/CleverAuthProvider';

const [useCurrentUser, Provider] =
  createCtx<gapi.auth2.GoogleUser>('CurrentUser');

/**
 * Hook returning a function to retrieve an access token for a google user.
 *
 * Can ONLY be called within the context of a CurrentUserProvider.
 */
export const useGetAccessToken = () => {
  const currentUser = useCurrentUser();
  return useCallback(
    () => accessTokenForGoogleUser(currentUser),
    [currentUser],
  );
};

/**
 * Hook returning a function to retrieve an offline access code.
 * This code is not enough for offline access, but in collaboration with
 * our backend + google APIs can be exchanged for a long-lived refresh token.
 *
 * Can ONLY be called within the context of a CurrentUserProvider.
 */
export const useGrantOfflineAccess = (
  options: gapi.auth2.OfflineAccessOptions = {},
) => {
  const currentUser = useCurrentUser();
  return useCallback(
    async () => (await currentUser.grantOfflineAccess(options)).code,
    [currentUser, options],
  );
};

interface CurrentUserProviderProps {
  whenSignedIn: React.ReactNode;
  whenNotSignedIn: React.ReactNode;
}
/**
 * Provider for the current logged in google user.
 *
 * MUST be used within a GoogleAuthInstanceProvider.
 * Will NOT render props.children unless useLoggedInGoogleUser() returns
 * a value, indicating their is an available logged in user.
 */
const CurrentUserProvider = (
  props: React.PropsWithChildren<CurrentUserProviderProps>,
) => {
  const currentUser = useLoggedInGoogleUser();

  const cleverInstance = useCleverInstance();

  const isUserAuthenticatedWithProvider =
    cleverInstance.currentUser.isSignedIn || currentUser?.isSignedIn;

  return (
    <Provider value={currentUser}>
      <ExtensionAuthMessaging />
      {isUserAuthenticatedWithProvider
        ? props.whenSignedIn
        : props.whenNotSignedIn}
    </Provider>
  );
};

export { CurrentUserProvider, useCurrentUser };

export { Provider as RawProvider };
