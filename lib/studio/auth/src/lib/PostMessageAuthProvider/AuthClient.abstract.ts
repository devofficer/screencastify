import { EventAction, EventType, trackEvent } from '@castify/app-analytics';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { environment as recordEnvironment } from '@castify/record-mv3/environment';
import { safeWindowOpen } from '@castify/safe-window-open';
import decodeJwt, { JwtPayload } from 'jwt-decode';

const logger = createBrowserLogger('AuthClient');

export abstract class AuthClient {
  protected jwt = '';

  public async init() {
    const storage = await chrome.storage.local.get(['token']);
    if (!storage) return;
    if (storage.token) {
      this.jwt = storage.token;
    }
    logger.info('AuthClient init');
  }

  public abstract ensureSignedIn(): Promise<boolean>;

  public async signIn(): Promise<boolean> {
    const loginUrl = await recordEnvironment.getExternalLink('loginRedirects');
    safeWindowOpen(loginUrl);
    // I don't love the polling idea, but it's muuuuuch simpler
    // than trying to coordinate messaging between this window,
    // the opened login window, and any other potential rendered
    // windows in the extension context.
    const success = await pollUntilTruthy(() => this.ensureSignedIn());
    if (!success) {
      logger.warn('failed to sign in');
    }

    // Capture analytics for "User Signed In - App"
    trackEvent({
      event: 'User Signed In - App',
      eventAction: EventAction.Event,
      eventType: EventType.GoogleTagManager,
    });

    logger.info('Signing in...');
    return success;
  }

  public abstract signOut(): Promise<void>;

  public abstract getJwt(): Promise<string>;

  public abstract refreshToken(): void;

  public expiredOrInvalid(token: string) {
    if (!token) return true;
    const JWT_EXPIRATION_THRESHOLD = 30_000;
    const decodedJwt = decodeJwt<JwtPayload>(token);
    const expiresAt = decodedJwt.exp ? decodedJwt.exp * 1000 : Date.now();
    const msUntilExpired = expiresAt - Date.now();
    return msUntilExpired < JWT_EXPIRATION_THRESHOLD;
  }
}

export interface ScreencastifyJWT extends JwtPayload {
  email?: 'string';
}

export interface CastifyJWT extends ScreencastifyJWT {
  'https://hasura.io/jwt/claims': {
    'X-Hasura-Allowed-Roles': string[];
    'X-Hasura-Default-Role': string;
    'X-Hasura-User-Id': string;
  };
}

const pollUntilTruthy = async (
  fn: () => Promise<unknown>,
  interval = 1_000,
  timeout = 30_000,
): Promise<boolean> => {
  return new Promise((resolve) => {
    let expired = false;
    const expires = setTimeout(() => {
      logger.warn('timed out polling for truthiness');
      clearTimeout(poll);
      expired = true;
      resolve(false);
    }, timeout);

    let poll: ReturnType<typeof setTimeout>;
    const checkResult = async () => {
      if (await fn()) {
        if (!expired) {
          clearTimeout(expires);
          resolve(true);
        }
      } else {
        poll = setTimeout(checkResult, interval);
      }
    };
    poll = setTimeout(checkResult, interval);
  });
};
