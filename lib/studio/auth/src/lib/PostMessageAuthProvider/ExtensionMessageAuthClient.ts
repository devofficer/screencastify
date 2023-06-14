import { AuthClient } from './AuthClient.abstract';
import { EventAction, EventType, trackEvent } from '@castify/app-analytics';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import decodeJwt, { JwtPayload } from 'jwt-decode';
import { MessageSender } from './postMessaging';

const logger = createBrowserLogger('ExtensionMesageAuthClient-SC');

export class ExtensionMessageAuthClient extends AuthClient {
  constructor(private sender: MessageSender) {
    super();
  }
  public async getJwt(): Promise<string> {
    logger.info('Getting JWT');
    return this.jwt;
  }
  public async ensureSignedIn() {
    const jwt = await this.getJwt();
    if (this.expiredOrInvalid(jwt)) return false;
    const decoded = decodeJwt<ScreencastifyJWT>(jwt);
    const hasEmail = !!decoded.email;
    const token = this.jwt;
    hasEmail && (await chrome.storage.local.set({ token }));
    const email = decoded.email;
    const userState = {
      userEmail: email,
    };
    await chrome.storage.local.set({ userState });

    logger.info('User is authenticated', {
      applicationState: {
        userEmail: decoded.email,
        destination: 'screencastify',
      },
    });
    return hasEmail;
  }

  public async signOut() {
    await chrome.storage.local.remove(['token', 'userState']);
    // Capture analytics for "User Signed Out - Extension"
    trackEvent({
      event: 'User Signed Out - Extension',
      eventAction: EventAction.Event,
      eventType: EventType.GoogleTagManager,
    });
  }
  public refreshToken() {
    this.sender.post({ command: 'SCREENCASTIFY-REFRESH-JWT' });
  }
}

export interface ScreencastifyJWT extends JwtPayload {
  email?: 'string';
}
