import { useControllerState } from '@castify/record-mv3/record-components';
import {
  IBrowserLogger,
  createBrowserLogger,
} from '@castify/studio/observability/browser';
import { useEffect } from 'react';

export function useTeardownWithInitializer() {
  const logger: IBrowserLogger = createBrowserLogger(
    'useTeardownWithInitializer',
  );
  const controllerState = useControllerState();
  useEffect(() => {
    const disconnectListener = () => {
      if (controllerState.recorderStatus === 'initialized') {
        window.close();
      }
    };
    const initializerPort = chrome.runtime.connect(chrome.runtime.id, {
      name: 'initializer',
    });
    const lastError = chrome.runtime.lastError;
    if (lastError) {
      logger.warn('Could not connect to initializer tab', { error: lastError });
    }
    initializerPort.onDisconnect.addListener(disconnectListener);
    return () => {
      initializerPort.onDisconnect.removeListener(disconnectListener);
      initializerPort.disconnect();
    };
  }, [controllerState.recorderStatus, logger]);
}
