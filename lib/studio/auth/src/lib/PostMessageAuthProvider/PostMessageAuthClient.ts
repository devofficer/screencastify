import { MessageSender } from './postMessaging';
import decodeJwt, { JwtPayload } from 'jwt-decode';
import { EventAction, EventType, trackEvent } from '@castify/app-analytics';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { AuthClient } from './AuthClient.abstract';

const logger = createBrowserLogger('PostMesageAuthClient-CFY');

export class PostMessageAuthClient extends AuthClient {
  constructor(private sender: MessageSender) {
    super();
  }

  public async getJwt(): Promise<string> {
    logger.info('Getting JWT');
    if (this.expiredOrInvalid(this.jwt)) {
      await this.requestJwt();
    }
    return this.jwt;
  }

  public async ensureSignedIn() {
    const jwt = await this.getJwt();
    if (this.expiredOrInvalid(jwt)) return false;

    const decoded = decodeJwt<CastifyJWT>(jwt);
    const hasEmail = !!decoded.email;
    const token = this.jwt;
    hasEmail && (await chrome.storage.local.set({ token }));
    const userId = decoded['https://hasura.io/jwt/claims']['X-Hasura-User-Id'];
    const email = decoded.email;
    let userState = await chrome.storage.local.get(['userState']);
    userState = { ...userState, userId: userId, userEmail: email };
    await chrome.storage.local.set({ userState });

    logger.info('User is authenticated', {
      applicationState: {
        userEmail: decoded.email,
        destination: 'castify',
      },
    });
    return hasEmail;
  }

  public async signOut() {
    this.jwt = '';
    await chrome.storage.local.remove(['token', 'userState']);
    await this.sender.send({ command: 'CFY-SIGN-OUT' });

    // Capture analytics for "User Signed Out - App"
    trackEvent({
      event: 'User Signed Out - App',
      eventAction: EventAction.Event,
      eventType: EventType.GoogleTagManager,
    });

    logger.info('Signed out');
  }

  private async requestJwt() {
    logger.info('Requesting JWT from origin');
    try {
      const jwt = (await this.sender.send({
        command: 'CFY-REQUEST-JWT',
      })) as string;
      this.jwt = jwt;
    } catch (err) {
      logger.error('Error communicating with iframe during auth', {
        applicationState: {
          error: err,
        },
      });
      throw err;
    }
  }
  public refreshToken(): Promise<void> {
    throw new Error('Method not implemented for castify');
  }
  public expiredOrInvalid(token: string) {
    if (!token) return true;
    const JWT_EXPIRATION_THRESHOLD = 30_000;
    const decodedJwt = decodeJwt<JwtPayload>(token);
    const expiresAt = decodedJwt.exp ? decodedJwt.exp * 1000 : Date.now();
    const msUntilExpired = expiresAt - Date.now();
    return msUntilExpired < JWT_EXPIRATION_THRESHOLD;
  }
}
export interface CastifyJWT extends JwtPayload {
  email?: 'string';
  'https://hasura.io/jwt/claims': {
    'X-Hasura-Allowed-Roles': string[];
    'X-Hasura-Default-Role': string;
    'X-Hasura-User-Id': string;
  };
}
