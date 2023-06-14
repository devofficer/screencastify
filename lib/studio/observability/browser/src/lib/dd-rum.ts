/* eslint-disable no-console */
/*!
 * Copyright 2022 Screencastify LLC
 */
import { datadogRum } from '@datadog/browser-rum';
import { environment } from '@castify/studio/env/browser';

// use strategy pattern to access runtime env
export interface IRumStrategy {
  allowedTracingOrigins: (string | RegExp)[];
  clientToken?: string;
  applicationId?: string;
}

export class SetAllUsersRumStrategy implements IRumStrategy {
  constructor(
    public readonly allowedTracingOrigins: (string | RegExp)[],
    public readonly clientToken: string,
    public readonly applicationId: string,
  ) {}
}

export class SetNoUserRumStrategy implements IRumStrategy {
  constructor(public readonly allowedTracingOrigins: (string | RegExp)[]) {}
}

// configs that are constants
export const defaultConfigs = {
  site: 'datadoghq.com',
  trackInteractions: true,
  trackSessionAcrossSubdomains: true,
};

export class DataDogRum {
  // this should only be called once per application, try/catch multiple calls
  public static init(
    serviceName: string,
    strategy: IRumStrategy,
    version: string,
    env: string,
  ) {
    try {
      console.info('initializing Datadog RUM');
      datadogRum.init({
        ...defaultConfigs,
        service: serviceName,
        env,
        clientToken: strategy.clientToken as string,
        applicationId: strategy.applicationId as string,
        // release version is being provided dynamically at build time
        version,
        /**
         * The list of internal (first party) origins called by the browser application,
         * 'https://api.example.com' or regExp / https: \/\/.*\.my-api-domain\.com/,
         * enabling tracing origins allows DD to inject a trace_id on the request header and correlate requests
         */
        allowedTracingOrigins: strategy.allowedTracingOrigins,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export const getDatadogRumStrategy = (
  env: string,
  clientToken?: string,
  applicationId?: string,
) => {
  // TODO: encapsulate allowedTracingOrigin values in an external config file
  let allowedTracingOrigins: (string | RegExp)[];
  // We don't need tracing origins in local development but this is here to test its behavior locally
  if (env === 'local-development') {
    allowedTracingOrigins = [
      /https?:\/\/localhost/g,
      new RegExp(environment.extensionOrigin),
    ];
    return new SetNoUserRumStrategy(allowedTracingOrigins);
  } else {
    allowedTracingOrigins = [
      /https:\/\/.*\.castify\.com/,
      /https:\/\/.*\.cfy-stage\.com/,
      // cfy-dev is a Cloud env to test Ops work, it's not local development
      /https:\/\/.*\.cfy-dev\.com/,
      /https:\/\/.*\.cfy-pen\.com/,
      /https:\/\/.*\.cfy-qa\.com/,
      new RegExp(environment.extensionOrigin),
    ];
    return new SetAllUsersRumStrategy(
      allowedTracingOrigins,
      clientToken as string,
      applicationId as string,
    );
  }
};
