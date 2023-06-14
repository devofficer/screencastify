import React, { useEffect, useState } from 'react';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { ErrorPage, ErrorTypeEnum } from '../ErrorPage/ErrorPage';

// export both for unit test
export const logger = createBrowserLogger('GlobalRejectionHandler');
export let listener: (e: PromiseRejectionEvent) => void;

/**
 * This functional component catches uncaught promise rejections and renders a fallback UI.
 * This technique is very useful for logging purposes but also allows you a safe fallback any time
 * that a catch method is not used when it should be.
 */
export const OnUnhandledRejection: React.FC = ({ children }) => {
  const [event, setEvent] = useState<null | PromiseRejectionEvent>(null);

  useEffect(() => {
    if (event) {
      chrome.storage.local.set({ recorderStatus: 'error' });
      logger.info('recorderStatus was set to error by OnUnhandledRejection');
    }
  }, [event]);

  useEffect(() => {
    listener = (e) => {
      if (e.reason instanceof Error) {
        logger.error('An unhandled promise rejection is caught:', {
          error: e.reason,
          message: e.reason.message,
          stack: e.reason.stack,
          promise: e.promise,
        });
      } else {
        logger.error('An unhandled promise rejection is caught:', {
          error: e.reason,
          promise: e.promise,
        });
      }
      setEvent(e);
      // prevent default handling
      e.preventDefault();
    };
    /**
     * Assign our own handling method to the global event listener as a side effect,
     * window needs to be explicitly called for jest unit test.
     */
    window.addEventListener('unhandledrejection', listener);

    return () => {
      // clean up event listener before this component unmounts
      window.removeEventListener('unhandledrejection', listener);
    };
  }, []);

  if (event) {
    return <ErrorPage errorType={ErrorTypeEnum.refreshPage} />;
  } else {
    return children as React.ReactElement;
  }
};
