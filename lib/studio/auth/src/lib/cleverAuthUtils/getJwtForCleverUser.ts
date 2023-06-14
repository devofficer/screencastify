import axios from 'axios';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { environment } from '@castify/studio/env/browser';
import { getAnonymousUserIdentifier } from '@castify/fe-common';

const JTW_EXPIRATION_THRESHOLD_MS = 30_000;

const encodedJwts: Record<string, string> = {};

let requestInFlight: Promise<string> | undefined;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getJwtForCleverUser = async (userInfo: any) => {
  if (requestInFlight) {
    return requestInFlight;
  } else {
    requestInFlight = _getJwtForCleverUser(userInfo);
    requestInFlight.finally(() => {
      requestInFlight = undefined;
    });
    return requestInFlight;
  }
};

export const _getJwtForCleverUser = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userInfo: any,
): Promise<string> => {
  interface ResponseWithToken {
    token: string;
  }
  const encodedJwt = encodedJwts[userInfo.id];
  if (encodedJwt) {
    // This jwtDecode function is NOT A SECURE FUNCTION and CAN NOT
    // verify the contents of the token.
    //
    // It is NOT POSSIBLE to algorithmicaly verify a JWT client-side because
    // clients MUST NOT have access to the secret used to sign tokens.
    //
    // We are only decoding it to determine the apparent expiration time
    // of the token in order to re-fetch a new jwt.
    const decodedJwt = jwtDecode<JwtPayload>(encodedJwt);

    const expiresAt = decodedJwt.exp ? decodedJwt.exp * 1000 : Date.now();
    const msUntilExpired = expiresAt - Date.now();
    if (msUntilExpired > JTW_EXPIRATION_THRESHOLD_MS) {
      return encodedJwt;
    }
  }
  const tokenResponse = await axios.post<ResponseWithToken>(
    `${environment.serviceUrl}auth/clever-token`,
    {
      user: userInfo,
    },
    {
      headers: {
        sessionUserId: getAnonymousUserIdentifier(),
      },
    },
  );
  encodedJwts[userInfo.id] = tokenResponse.data.token;
  return tokenResponse.data.token;
};
