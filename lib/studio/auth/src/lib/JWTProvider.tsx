/**
 * This provider exists to be a common interface for consumers that require
 * a JWT (eg HTTP/GraphQL clients), but which may be used under varying authentication
 * providers.
 *
 * For instance, in the studio web app, the HTTP/GraphQL cients exist under
 * the GoogleAuthInstanceProvider, which will provide a JWT, whereas in the
 * extension they exist under a PostMessageAuthProvder, which will likewise
 * provide a JWT. Each of those auth providers invokes this provider,
 * creating the necessary context that can be imported with the useGetJwt hook
 * into the clients.
 */

import { createCtx } from '@castify/fe-common';

export const [useGetJwt, Provider] = createCtx<() => Promise<string>>('GetJWT');

export const JWTProvider: React.FC<{
  useGetJwt: () => () => Promise<string>;
}> = (props) => {
  const value = props.useGetJwt();
  return <Provider value={value}>{props.children}</Provider>;
};
