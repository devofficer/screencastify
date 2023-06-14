// This file is replaced during build by using the `fileReplacements` array.
// Except in a production build, where this is the default.

import { ExtensionEnvironment, EnvMap } from './environment.interface';

const webAppOrigins = {
  castify: 'https://app.castify.com',
  screencastify: 'https://app.screencastify.com',
  vmp: 'https://app.screencastify.com',
};

// default will be the production env will be overwritten during build process
const environmentDefinition = {
  production: true,
  environmentName: 'production',
  dataDogEnv: EnvMap.cfyProd,
  dataDogClientToken: 'pub8ef1e291117174aaadca5bccac2fd1bd',
  dataDogApplicationId: '305f58c6-b288-4671-8273-87ec860a8917',
  serviceUrl: 'https://app.castify.com/api/studioService/',
  httpHasuraUrl: 'https:/app.castify.com/v1/graphql',
  websocketHasuraUrl: 'wss:/app.castify.com/v1/graphql',
};

export const environment = new ExtensionEnvironment(
  environmentDefinition,
  webAppOrigins,
);
