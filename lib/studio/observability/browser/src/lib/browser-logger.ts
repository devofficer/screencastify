/* eslint-disable no-console */
/*!
 * Copyright 2022 Screencastify LLC
 */
import {
  datadogLogs,
  Logger,
  HandlerType,
  StatusType,
} from '@datadog/browser-logs';
import { environment as studioEnv } from '@castify/studio/env/browser';
import { environment as extensionEnv } from '@castify/record-mv3/environment';

interface IBrowserLogInfo {
  error?: Error | unknown;
  [key: string]: unknown;
}

// TODO: implement metric strict typing
export interface IBrowserLogger {
  error: (message: string, args?: IBrowserLogInfo) => void;
  info: (message: string, args?: IBrowserLogInfo) => void;
  warn: (message: string, args?: IBrowserLogInfo) => void;
  debug: (message: string, args?: IBrowserLogInfo) => void;
}

// use strategy pattern to access runtime env
export interface IBrowserLoggerStrategy {
  handler: HandlerType | HandlerType[];
  context?: Record<string, unknown>;
  logger: (label: string) => Logger | Console;
}

export class ProductionBrowserLoggerStrategy implements IBrowserLoggerStrategy {
  // send logs to DataDog in prod, same condition/setup as server logger
  handler = HandlerType.http;
  // upon calling getLoggerGlobalContext(), context that is added throughout the application
  // will be attached to all browser logs as a global @attribute
  context = datadogLogs.getLoggerGlobalContext();
  logger(label: string): Logger {
    return datadogLogs.createLogger(label, {
      level: 'info',
      handler: this.handler,
      context: this.context,
    });
  }
}

export class TestBrowserLoggerStrategy implements IBrowserLoggerStrategy {
  handler = HandlerType.console;
  // TODO figure out how to get logger labels to print out in a browser context
  // monkeypatching results in an infinite loop as jest also monkeypatches
  // the console
  logger(_label: string): Console {
    return console;
  }
}

export class NonProductionBrowserLoggerStrategy
  implements IBrowserLoggerStrategy
{
  // print logs on dev console in dev, same condition/setup as server logger
  handler = HandlerType.console;
  /**
   * Monkey patch logger to control logger styles ourselves in dev. Give minimum styles for readability.
   * Can be elaborated later if we want better styles.
   * DD console log levels are color coded: info-green, debug-blue, error-red, warn-yellow
   *
   * TODO: modify monkey patch to use prototype.log after remoteLogger deprecates. Currently throws using prototype
   * possibly due to conflicts with remoteLogger patching directly on Console prototype log as well
   */
  logger(label: string): Logger {
    const logger = datadogLogs.createLogger(label, {
      handler: this.handler,
      level: 'debug',
    });

    logger.log = <T>(
      message: string,
      messageContext?: T,
      status?: StatusType,
    ): void => {
      const color =
        status === 'debug'
          ? 'hsl(240, 100%, 75%)'
          : status === 'error'
          ? 'hsl(348, 78%, 53%)'
          : status === 'warn'
          ? 'hsl(60, 100%, 75%)'
          : 'hsl(120, 100%, 75%)'; // info
      const style = `color: black; background: ${color}; border: 1px solid black; border-radius: 4px; padding: 4px;`;

      if (messageContext) {
        console.log(`%c${status}: ${label}`, style, message, messageContext);
      } else {
        console.log(`%c${status}: ${label}`, style, message);
      }
    };
    return logger;
  }
}

/**
 * An abstraction to customize DataDog logger as our browser logger. Update framework logger in the class
 * versus calling framework logger directly for scalability.
 * Make all members static because their behavior remain consistent and do not require instance variables
 * for both performance and easier debugging.
 */

export class BrowserLogger {
  // expose for unit test
  public static createLogger(
    label: string,
    strategy: IBrowserLoggerStrategy,
  ): Logger | Console {
    return strategy.logger(label);
  }

  private static createStrictTypingLogger(
    logger: Logger | Console,
  ): IBrowserLogger {
    return {
      error: (message, args?) => logger.error(message, args),
      warn: (message, args?) => logger.warn(message, args),
      info: (message, args?) => logger.info(message, args),
      debug: (message, args?) => logger.debug(message, args),
    };
  }

  public static getStrictTypingLogger(
    label: string,
    strategy: IBrowserLoggerStrategy,
  ): IBrowserLogger {
    const logger = BrowserLogger.createLogger(label, strategy);
    return BrowserLogger.createStrictTypingLogger(logger);
  }
}

// This is not great, not scalable. We need a better design to deal with environment based strategies.
// Strategy needs to be determined in this file as we are exporting createBrowserLogger as a singleton
// which has the strategy as a dependency during module build and compilation. De-couple init
// from the BrowserLogger class as a solution to be called at multiple entry points.
const isLocal: boolean =
  (studioEnv.environmentName === 'local-development' &&
    process.env.NODE_ENV === 'development') ||
  (extensionEnv.dataDogEnv === 'local-development' &&
    process.env.NODE_ENV === 'development');

const getStrategy = () => {
  if (process.env.NODE_ENV === 'test') return new TestBrowserLoggerStrategy();
  if (isLocal) return new NonProductionBrowserLoggerStrategy();
  return new ProductionBrowserLoggerStrategy();
};

// export the logger based on env and used everywhere as a singleton
export const createBrowserLogger = (label: string) => {
  return BrowserLogger.getStrictTypingLogger(label, getStrategy());
};

// this should only be called once per application, try/catch multiple calls
export const browserLoggerInit = (
  serviceName: string,
  clientToken: string,
  env: string,
) => {
  try {
    console.log('initializing Datadog Browser Logger');
    datadogLogs.init({
      // below config needs to be consistent with Datadog RUM, see configuration section in doc https://docs.datadoghq.com/logs/log_collection/javascript
      trackSessionAcrossSubdomains: true,
      clientToken,
      site: 'datadoghq.com',
      forwardErrorsToLogs: true,
      sampleRate: 100,
      env,
      service: serviceName,
    });
  } catch (error) {
    console.log(error);
  }
};
