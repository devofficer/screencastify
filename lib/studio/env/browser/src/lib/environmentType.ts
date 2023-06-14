export enum EnvMap {
  localDevelopment = 'local-development',
  cfyStage = 'cfy-stage',
  cfyProd = 'cfy-prod',
  cfyQa = 'cfy-qa',
  cfyPen = 'cfy-pen',
  // cfy-dev is a Cloud env to test Ops work, it's not local development
  cfyDev = 'cfy-dev',
}

export interface BaseEnvironment {
  maxUndoHistoryLength: number;
}

export interface Environment extends BaseEnvironment {
  production: boolean;
  environmentName: EnvMap;
  serviceUrl: string;
  httpHasuraUrl: string;
  websocketHasuraUrl: string;
  extensionOrigin: string;
  extensionId: string;
  // local development doesn't need the 2 datadog values below
  dataDogClientToken?: string;
  dataDogApplicationId?: string;
  // take out optional before release
  serviceDomain?: string;
  googleAuth: {
    clientId: string;
    driveAppId: string;
  };
  googlePickerApiKey: string;
  externalLinks: {
    screencastifyWebLink: string;
    supportLink: string;
    chromeWebStoreLink: string;
    legacyChromeWebStoreLink: string;
    chargebeeSDKLink: string;
    marketingLink: string;
  };
  chargebeeSite: string;
  cleverAuth: {
    clientId: string;
    redirectUrl: string;
    authorizationUrl: string;
  };

  CLOUDBEES_ENV_KEY: string;
}
