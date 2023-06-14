import { createCtx } from '@castify/fe-common';
import { AuthClient } from './AuthClient.abstract';
import { useAuthClientAndFrameRef } from './useAuthClientAndFrameRef';
import { JWTProvider } from '../JWTProvider';
import { useSignInHandler } from './useSignInHandler';
import { environment } from '@castify/record-mv3/environment';
import { useEffect, useState } from 'react';

const [useClient, Provider] = createCtx<AuthClient>('PostMessageAuth');
export const usePostMessageAuthClient = useClient;

export const PostMessageAuthProvider: React.FC<{
  loadingElement: React.ReactNode;
  signInElement: React.ReactNode;
}> = (props) => {
  const [frameHref, setFrameHref] = useState('');

  useEffect(() => {
    environment.getExternalLink('authentication').then((authOrigin) => {
      setFrameHref(authOrigin);
    });
  }, []);

  const { authClient, frameRef } = useAuthClientAndFrameRef();
  const { signInRequired } = useSignInHandler(authClient);

  const useGetJwt = () => async () => {
    return (await authClient?.getJwt()) || '';
  };
  return (
    <>
      {authClient && (
        <Provider value={authClient}>
          <JWTProvider useGetJwt={useGetJwt}>
            {signInRequired ? props.signInElement : props.children}
          </JWTProvider>
        </Provider>
      )}
      {frameHref && (
        <iframe
          title="Authentication Frame"
          style={{ display: 'none' }}
          ref={frameRef}
          src={frameHref}
        ></iframe>
      )}
    </>
  );
};
