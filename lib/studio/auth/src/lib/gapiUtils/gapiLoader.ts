import { createBrowserLogger } from '@castify/studio/observability/browser';
import { environment } from '@castify/studio/env/browser';

const logger = createBrowserLogger('gapiLoader');

export const GAPI_DRIVE_READ_SCOPE =
  'https://www.googleapis.com/auth/drive.readonly';
export const GAPI_DRIVE_FILE_SCOPE =
  'https://www.googleapis.com/auth/drive.file';
export const GAPI_PROFILE_SCOPE =
  'https://www.googleapis.com/auth/userinfo.profile';
export const GAPI_EMAIL_SCOPE =
  'https://www.googleapis.com/auth/userinfo.email';

export const gapiProfileScopes = `${GAPI_EMAIL_SCOPE} ${GAPI_PROFILE_SCOPE}`;
/*
 * TODO: Use this set of Drive scopes once we are ready to export to Google Drive. This will
 *       require an update to the OAuth Consent Screen and re-verification of the production
 *       app when we do it. See this Slack thread for the context for removing it previously:
 *       https://screencastify.slack.com/archives/C03257K6CJH/p1660940426458519?thread_ts=1660659200.441969&cid=C03257K6CJH
 */
// export const gapiDriveScopes = `${GAPI_DRIVE_FILE_SCOPE} ${GAPI_DRIVE_READ_SCOPE}`;
export const gapiDriveScopes = GAPI_DRIVE_READ_SCOPE;

interface GapiClientConfig extends gapi.auth2.ClientConfig {
  plugin_name: string;
}

/**
 * FIXME: Google Sign-In Javascript Plaform Library for Web is deprecated.
 * DEADLINE: 03/23/2023 no longer downloadable
 * RESTRICTION: 07/29/2022 no newly created OAuth Client IDs accepted
 * ACTION: Need to upgrade to the new Google Identity Services for Web.
 * REFERENCE:  https://developers.googleblog.com/2021/08/gsi-jsweb-deprecation.html
 */
const gapiInitConfig: GapiClientConfig = {
  client_id: environment.googleAuth.clientId,
  scope: gapiProfileScopes,
  plugin_name: 'enable deprecated auth api',
};

export const gapiLoader = {
  /**
   * This function keeps a contract with the index.html, which is supposed
   * to load the gapi script via a tag and in its onload callback, initialize
   * the script, instructing it to when complete resolve a promise on the window
   * living at __GAPI_CLIENT_PROMISE. The promise is expected to reject
   * if script load fails
   */
  async loadGapiClient() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gapiClientPromise = (window as any).__GAPI_CLIENT_PROMISE;
    if (!gapiClientPromise)
      throw new Error('no gapi client promise found on window');
    if (
      !gapiClientPromise.then ||
      !(gapiClientPromise.then instanceof Function)
    )
      throw new Error('gapi client promise is not a promise');
    await gapiClientPromise;
  },

  /**
   * Initialize gapi.auth2 with app config
   */
  initGapiAuth() {
    return new Promise<void>((resolve, reject) => {
      logger.debug('initializing gapi.auth2...');
      // not using async/await because it's not a real promise
      gapi.auth2
        .init(gapiInitConfig)
        .then(() => {
          logger.debug('gapi.auth2 initialized');
          resolve();
        })
        .catch(reject);
    });
  },

  /**
   * Typical interface to be used outside of testing/this file.
   */
  async init() {
    await gapiLoader.loadGapiClient();
    await gapiLoader.initGapiAuth();
  },
};
