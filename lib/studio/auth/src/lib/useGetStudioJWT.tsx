import { useCallback } from 'react';
import { getJwtForGoogleUser } from './gapiUtils/getJwtForGoogleUser';
import { getJwtForAnonymousVisitor } from './gapiUtils/getJwtForAnonymousVisitor';
import { getJwtForCleverUser } from './cleverAuthUtils/getJwtForCleverUser';
import { AuthTokenFailException } from '@castify/fe-common';
import {
  useGoogleAuthInstance,
  useUserProfile,
} from './GoogleAuthInstanceProvider/GoogleAuthInstanceProvider';
import { useCleverInstance } from './CleverAuthProvider/CleverAuthProvider';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { maybeUpdateExtensionJWT } from './maybeUpdateExtensionJWT';

const useGetStudioJWTLogger = createBrowserLogger('JWT Logger');

export const useGetStudioJWT = () => {
  const userProfile = useUserProfile();
  const googleUser = useGoogleAuthInstance().currentUser.get();
  const cleverInstance = useCleverInstance();

  return useCallback(async () => {
    try {
      // temporary workaround so app doesn't break
      if (cleverInstance.currentUser.isSignedIn && !userProfile.isSignedIn) {
        const res = await getJwtForCleverUser(cleverInstance.currentUser);
        useGetStudioJWTLogger.debug('Clever Token', { response: res });
        maybeUpdateExtensionJWT(res);
        return res;
      } else if (googleUser.isSignedIn()) {
        const res = await getJwtForGoogleUser(googleUser);
        useGetStudioJWTLogger.debug('Google Token', { response: res });
        maybeUpdateExtensionJWT(res);
        return res;
      } else {
        useGetStudioJWTLogger.debug('Anonymous Token', {
          response: userProfile,
        });
        return getJwtForAnonymousVisitor(userProfile);
      }
    } catch (error) {
      throw new AuthTokenFailException();
    }
  }, [googleUser, userProfile, cleverInstance.currentUser]);
};
