// This file can be replaced during build by using the `fileReplacements` array.
// When building for production, this file is replaced with `environment.production.ts`.

import { Environment, EnvMap } from './environmentType';
import { baseEnvironment } from './environment.base';
import * as extensionOrigins from './extensionOrigins';

// default environment config if no config was set via nx
export const environment: Environment = {
  ...baseEnvironment,
  production: false,
  extensionOrigin: extensionOrigins.stagingOrigin,
  extensionId: extensionOrigins.stagingExtensionId,
  environmentName: EnvMap.localDevelopment,
  serviceUrl: 'http://localhost:8095/api/studioService/',
  httpHasuraUrl: 'http://localhost:8080/v1/graphql/',
  websocketHasuraUrl: 'ws://localhost:8080/v1/graphql',
  googleAuth: {
    clientId:
      '694166890911-tnnqb2mrv66edg0bh5msrcju72k5qc25.apps.googleusercontent.com',
    driveAppId: '694166890911', // staging
  },
  googlePickerApiKey: 'AIzaSyDyMrEeJq2f3r941ByS3LdbnzksBSuj8aE',
  externalLinks: {
    screencastifyWebLink: 'https://app.staging.screencastify.com',
    supportLink: 'https://askcastify.zendesk.com/hc/en-us/requests/new',
    chromeWebStoreLink:
      'https://chrome.google.com/webstore/detail/screencastify-screen-vide/nocepbfomlobkggpnokaimlijaeapjph?hl=en',
    legacyChromeWebStoreLink:
      'https://chrome.google.com/webstore/detail/screencastify-screen-vide/mmeijimgabbpbgpdklnllpncmdofkcpn?hl=en',
    chargebeeSDKLink: 'https://js.chargebee.com/v2/chargebee.js',
    marketingLink: 'https://www.screencastify.com',
  },
  chargebeeSite: 'screencastify-test',
  cleverAuth: {
    clientId: '39cf4d6bf16c49899796',
    redirectUrl: 'http://localhost:4200/auth/clever/return',
    authorizationUrl: 'https://clever.com/oauth/authorize',
  },
  CLOUDBEES_ENV_KEY: '633c66e0a80e00b750faaca8',
};
