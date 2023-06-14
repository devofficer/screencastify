// external libs
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';

// env vars
import { SERVICE_NAME } from './service-name';
import { APP_VERSION } from './version';
import { environment } from '@castify/record-mv3/environment';

// internal libs
import {
  IRumStrategy,
  getDatadogRumStrategy,
  DataDogRum,
  browserLoggerInit,
} from '@castify/studio/observability/browser';
import { getAnonymousUserIdentifierAsync } from '@castify/fe-common';

export const initObservability = async (tag: string): Promise<void> => {
  const version = APP_VERSION ?? 'Unexpected Version Name';
  const serviceName = SERVICE_NAME + tag;
  /**
   * getDatadogBrowserLoggerStrategy and init must be called before anything else
   * to use BrowserLogger and createBrowserLogger to ensure that the correct strategy
   * is assigned in time in the observability lib.
   */
  browserLoggerInit(
    serviceName,
    environment.dataDogClientToken as string,
    environment.dataDogEnv,
  );
  // only initiate RUM when it's not local development to prevent data from being
  // sent to Datadog during development
  if (environment.dataDogEnv !== 'local-development') {
    const rumStrategy: IRumStrategy = getDatadogRumStrategy(
      environment.dataDogEnv,
      environment.dataDogClientToken,
      environment.dataDogApplicationId,
    );
    DataDogRum.init(serviceName, rumStrategy, version, environment.dataDogEnv);
  }
};

// each component of extension's distributed system except for content script injection gets the id
// from shared chrome.storage.session context, set that value on the global logger context and RUM user
// the destination is needed to be able to differentiate between usage
// with castify vs screencastify
export const setObservabilityContext = (): void => {
  getAnonymousUserIdentifierAsync().then((extSessionUserId) => {
    environment
      .getDestinationOption()
      .then((destination) =>
        datadogLogs.setLoggerGlobalContext({ extSessionUserId, destination }),
      );
    /**
     * Whether the user is anonymous or authenticated, assign a session user Id right away on visit
     * for DataDog Real User Monitoring. The id can track user events and is sent to the backend
     * to correlate frontend and backend logs. This id is shared with GoogleAuthInstance
     * */
    if (environment.dataDogEnv !== 'local-development') {
      datadogRum.setUser({ id: extSessionUserId });
    }
  });
};
