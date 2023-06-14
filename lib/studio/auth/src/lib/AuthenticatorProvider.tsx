import React, { useState } from 'react';
import { createCtx } from '@castify/fe-common';
import {
  useGoogleAuthInstance,
  useUntrackedSignIn,
  useUntrackedSignOut,
} from './GoogleAuthInstanceProvider/GoogleAuthInstanceProvider';
import { maybeSignOutOfExtension } from './maybeSignOutOfExtension';
import { useHttpClient } from './useHttpClient';
import { environment } from '@castify/studio/env/browser';
import { useLocation, useNavigate } from 'react-router';
import { getAnonymousUserIdentifier } from '@castify/fe-common';

interface Authenticator {
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<never>;
  signOutWithoutReload: () => Promise<boolean>;
}

const [useAuthenticator, Provider] = createCtx<Authenticator>(
  'AuthenticatorProvider',
);

/**
 * Hook returning a function that will begin signIn flow by launching a
 * google auth pop-up.
 *
 * May ONLY be used within an AuthenticatorProvider.
 */
const useGoogleSignIn = () => useAuthenticator().signInWithGoogle;

/**
 * Hook returning a function that will sign the user out.
 * This will result in a full page refresh to ensure we dump any
 * ephemeral user state.
 *
 * May ONLY be used within an AuthenticatorProvider.
 */
const useSignOut = () => useAuthenticator().signOut;

/**
 * Hook returning a function that will sign the user out.
 * This will NOT result in a page refresh
 *
 * May ONLY be used within an AuthenticatorProvider.
 */
const useSignOutWithoutReload = () => useAuthenticator().signOutWithoutReload;

/**
 * Provider for signIn/signOut.
 *
 * Will render a loading element while signIn is in progress. While signIn is in
 * progress there will be a google oauth pop-up presented to the user.
 *
 * Must be rendered inside a GoogleAuthInstanceProvider.
 */
const AuthenticatorProvider: React.FC<{
  loadingElement: React.ReactElement;
}> = (props) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authenticationError, setAuthenticationError] = useState<Error>();
  const googleUser = useGoogleAuthInstance().currentUser.get();

  const untrackedSignIn = useUntrackedSignIn();
  const untrackedSignOut = useUntrackedSignOut();

  const httpClient = useHttpClient();
  const navigate = useNavigate();
  const location = useLocation();
  const isEmptyRoute = location.pathname.includes('empty');

  const authenticator: Authenticator = {
    signInWithGoogle: async () => {
      try {
        setAuthenticationError(undefined);
        setIsAuthenticating(true);
        await untrackedSignIn();
        const authResponse = googleUser.getAuthResponse();
        const googleToken = authResponse.id_token;
        const authProviderCheck = await httpClient.post(
          `${environment.serviceUrl}auth/google-auth-verification`,
          null,
          {
            headers: {
              Authorization: `Bearer ${googleToken}`,
              sessionUserId: getAnonymousUserIdentifier(),
            },
          },
        );
        // if the user doesn't use google auth we should clear out
        // everything that google library has set and effectively log
        // them out as a google user in our system before trying
        // to log them in with clever
        if (!authProviderCheck.data.useGoogleAuth && !isEmptyRoute) {
          await untrackedSignOut();
          localStorage.clear();
          sessionStorage.clear();
          navigate(`login/${authProviderCheck.data.authProvider}`);
        }
      } catch (error) {
        // this expectedError occurs when a user intentionally closes the google auth popup
        // and does not need to be thrown
        const expectedError = 'popup_closed_by_user';
        if (!expectedError) {
          setAuthenticationError(error as Error);
        }
      } finally {
        setIsAuthenticating(false);
      }
    },

    signOut: async () => {
      maybeSignOutOfExtension();
      return new Promise<never>(() => {
        untrackedSignOut()
          .then(() => {
            localStorage.clear();
            sessionStorage.clear();
            return window.location.assign('/');
          })
          .catch((error: Error) => setAuthenticationError(error));
      });
    },

    signOutWithoutReload: async () => {
      try {
        await untrackedSignOut();
        localStorage.clear();
        sessionStorage.clear();
        return true;
      } catch (error) {
        setAuthenticationError(error as Error);
        return false;
      }
    },
  };

  // Throwing to error boundary
  if (authenticationError) {
    throw authenticationError;
  }

  return (
    <Provider value={authenticator}>
      {isAuthenticating ? props.loadingElement : props.children}
    </Provider>
  );
};

export {
  AuthenticatorProvider,
  useGoogleSignIn,
  useSignOut,
  useSignOutWithoutReload,
  useAuthenticator,
};

export { Provider as RawProvider };
