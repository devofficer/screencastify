/**
 * There's some significant complexity growing in this file due to the
 * dual intake destinations (castify vs. screencastify). The goal is to
 * keep that complexity cordoned off to this file, so that the environment
 * object imported into the application can be simple to use.
 */

export enum EnvMap {
  localDevelopment = 'local-development',
  cfyStage = 'cfy-stage',
  cfyProd = 'cfy-prod',
  cfyQa = 'cfy-qa',
  cfyPen = 'cfy-pen',
}

export type Destination = 'castify' | 'screencastify';

type WebAppOrigins = {
  castify: string;
  screencastify: string;
  vmp: string;
};

export type OriginList = {
  /**
   * Where to post new videos
   * (studio or hosted VMP)
   */
  intake: string;

  /**
   * Where to authenticate the extension
   */
  auth: string;

  /**
   * Where to find my videos
   * (studio or old screencastify)
   */
  projects: string;
};

type ExternalLinks = {
  authentication: string;
  loginRedirects: string;
  myVideosLink: string;
  extensionIntake: string;
  installationRedirect: string;
  installationForwardUrl: string;
  umbrellaServiceUrl: string;
  blockedPermissionsSupportLink: string;
  blockedRecordingToolsSupportLink: string;
  contactSupportLink: string;
  uninstallUrl: string;
  uninstallForwardUrl: string;
  datadogPostLogUrl: string;
  pricingPage: string;
  accountPage: string;
};

/**
 * These are the properties that are passed in when instantiating
 * the ExtensionEnvironment. They are set individually as readonly
 * properties on the instance
 */
type ExtensionEnvironmentDefinition = Pick<
  ExtensionEnvironment,
  | 'production'
  | 'environmentName'
  | 'dataDogEnv'
  | 'dataDogClientToken'
  | 'dataDogApplicationId'
  | 'serviceUrl'
  | 'httpHasuraUrl'
  | 'websocketHasuraUrl'
>;

export class ExtensionEnvironment implements ExtensionEnvironmentDefinition {
  readonly production: boolean = this.definition.production;
  readonly environmentName: string = this.definition.environmentName;
  readonly dataDogEnv: EnvMap = this.definition.dataDogEnv;
  readonly dataDogClientToken?: string = this.definition.dataDogClientToken;
  readonly dataDogApplicationId?: string = this.definition.dataDogApplicationId;
  readonly serviceUrl: string = this.definition.serviceUrl;
  readonly httpHasuraUrl: string = this.definition.httpHasuraUrl;
  readonly websocketHasuraUrl: string = this.definition.websocketHasuraUrl;

  private destinationOrigins: Record<Destination, OriginList>;
  private destinationLinks: Record<Destination, ExternalLinks>;

  constructor(
    private definition: ExtensionEnvironmentDefinition,
    private webAppOrigins: WebAppOrigins,
  ) {
    this.destinationOrigins = {
      screencastify: this.buildOrigins('screencastify'),
      castify: this.buildOrigins('castify'),
    };

    this.destinationLinks = {
      screencastify: this.buildExternalLinks('screencastify'),
      castify: this.buildExternalLinks('castify'),
    };
  }

  async getOrigin(key: keyof OriginList) {
    const destination = await this.getDestinationOption();
    return this.destinationOrigins[destination][key];
  }

  async getAllOrigins() {
    const destination = await this.getDestinationOption();
    const origins = this.destinationOrigins[destination];
    return { ...origins }; // return a copy so they can't be modified
  }

  async getExternalLink(key: keyof ExternalLinks) {
    const destination = await this.getDestinationOption();
    return this.destinationLinks[destination][key];
  }

  public async getDestinationOption(): Promise<Destination> {
    /**
     * Note, if you come here to debug this nonsense.
     * There is no 'process' object at runtime.
     * Webpack replaces process.env.INGEST_DEST at build time with
     * the value that is defined in the webpack config
     *
     * See the 'example' section here for more info
     * https://webpack.js.org/plugins/environment-plugin/#usage-with-default-values
     */

    // process.env.INGEST_DEST is populated by webpack.
    return process.env.INGEST_DEST === 'castify' ? 'castify' : 'screencastify';
  }

  private buildOrigins(destination: Destination) {
    const { castify, vmp, screencastify } = this.webAppOrigins;
    const toScreencastify = destination === 'screencastify';
    return {
      intake: toScreencastify ? vmp : castify,
      auth: toScreencastify ? screencastify : castify,
      projects: toScreencastify ? screencastify : castify,
    };
  }

  private buildExternalLinks(destination: Destination) {
    const toScreencastify = destination === 'screencastify';
    const extensionIntakeBase = this.getExtensionIntakeBase(destination);
    const origins = this.destinationOrigins[destination];
    // for legacy links:
    const baseDomain = this.production
      ? 'screencastify.com'
      : `${this.environmentName}.screencastify.com`;
    const servicesDomain = `svc.${baseDomain}`;
    const installationForwardUrl = toScreencastify
      ? `${extensionIntakeBase}/extension-handover?source=installation`
      : `${origins.projects}/login?source=installation`;
    return {
      loginRedirects: toScreencastify
        ? `${extensionIntakeBase}/extension-handover`
        : `${origins.auth}/login`,
      authentication: toScreencastify
        ? // this one has to use the intake link so that local
          // testing will function. It is otherwise the same.
          `${extensionIntakeBase}/empty`
        : `${origins.auth}/empty`,
      myVideosLink: `${origins.projects}/videos`,
      extensionIntake: `${extensionIntakeBase}/videos/new?source=extension`,
      installationRedirect: `${origins.projects}/analytics/ext-install-event`,
      installationForwardUrl,
      umbrellaServiceUrl: `https://umbrella.${servicesDomain}/api/umbrellaService`,
      // umbrellaServiceUrl: 'http://localhost:8090/api/umbrellaService',
      blockedPermissionsSupportLink:
        'https://askcastify.zendesk.com/hc/en-us/articles/7589057200023-I-Accidentally-Blocked-Screencastify-from-Accessing-my-Webcam-and-Microphone',
      blockedRecordingToolsSupportLink:
        'https://askcastify.zendesk.com/hc/en-us/articles/7148797038231',
      contactSupportLink: toScreencastify
        ? 'https://learn.screencastify.com/hc/en-us'
        : 'https://askcastify.zendesk.com/hc/en-us/requests/new',
      uninstallUrl: `${origins.projects}/analytics/ext-uninstall-event`,
      uninstallForwardUrl:
        'https://docs.google.com/forms/d/e/1FAIpQLSc3D8IZeac-ADufgEwexsn5VqpWq2Rh9EeJfrk7bBdRQLs7Yw/viewform',
      datadogPostLogUrl:
        'https://logs.browser-intake-datadoghq.com/api/v2/logs',
      pricingPage: 'https://www.screencastify.com/pricing',
      accountPage: toScreencastify
        ? 'https://app.screencastify.com/account/subscription'
        : 'https://app.cfy-stage.com/account',
    } as const;
  }

  private getExtensionIntakeBase = (destination: Destination) => {
    const origins = this.destinationOrigins[destination];
    const toScreencastify = destination === 'screencastify';

    return toScreencastify && !origins.intake.match(/\/\/localhost:/)
      ? `${origins.intake}/manage`
      : origins.intake;
  };
}
