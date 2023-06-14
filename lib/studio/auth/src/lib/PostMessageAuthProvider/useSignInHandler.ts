/* eslint-disable no-console */
import { environment } from '@castify/record-mv3/environment';
import decodeJwt, { JwtPayload } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { AuthClient } from './AuthClient.abstract';

interface IStorageData {
  [key: string]: chrome.storage.StorageChange;
}
export function useSignInHandler(authClient: AuthClient | null) {
  const [signInRequired, setSignInRequired] = useState(true);
  const [isLoading, setisLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [destination, setDestination] = useState<string | undefined>();

  useEffect(() => {
    let activeTimerId: NodeJS.Timer;
    (async () => {
      const destinationFromEnv = await environment.getDestinationOption();
      setDestination(destinationFromEnv);
      //set up interval to run every 3 seconds and check if jwt token is about to expire
      if (destinationFromEnv === 'screencastify') {
        activeTimerId = setInterval(async () => {
          const storageResult = await chrome.storage.local.get(['token']);
          if (
            storageResult.token &&
            authClient &&
            authClient.expiredOrInvalid(storageResult.token)
          ) {
            authClient.refreshToken();
          }
        }, 3000);
      }
    })();
    return () => {
      if (activeTimerId) clearInterval(activeTimerId);
    };
  }, [authClient]);

  useEffect(() => {
    setisLoading(true);
    if (!authClient || !destination) return;

    //The presense of a token means a user is good for castify users it will refresh in background if expired
    const checkForUnexpiredExistingToken = async () => {
      const storage = await chrome.storage.local.get(['token']);
      if (!storage?.token) {
        setisLoading(true);
        const isSignedIn = await authClient.ensureSignedIn();
        setSignInRequired(!isSignedIn);
        setisLoading(false);
        return;
      }
      //TODO remove this block just here for testing
      if (storage.token) {
        const decodedToken = await decodeJwt<JwtPayload>(storage.token);
        if (decodedToken.exp) {
          // eslint-disable-next-line no-console
          console.log(
            'Readable Exp time >>>' + new Date(decodedToken.exp * 1000),
          );
        }
        setSignInRequired(false);
        setisLoading(false);
      }
    };

    const onStorageUpdate = async (changes: IStorageData) => {
      if (changes.token) {
        if (changes.token.newValue) {
          setSignInRequired(false);
          setisLoading(false);
        }
      }
    };
    checkForUnexpiredExistingToken();
    // set up a listener for changes indicating a user has signed in
    chrome.storage.onChanged.addListener(onStorageUpdate);
    return () => chrome.storage.onChanged.removeListener(onStorageUpdate);
  }, [authClient, destination]);

  /**
   * Because the loading state can change frequently and will otherwise expose
   * the sign-in unnecessarily, we have a separate useEffect that monitors these
   * changes. It gives a smoother experience with the loader for the user.
   */
  useEffect(() => {
    isLoading && setShowLoader(true);
    !isLoading && setShowLoader(false);
  }, [isLoading]);
  return { signInRequired, showLoader, isLoading };
}
