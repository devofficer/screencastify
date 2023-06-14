import { useState, useRef, useEffect } from 'react';
import { environment as recordEnvironment } from '@castify/record-mv3/environment';
import { PostMessageAuthClient } from './PostMessageAuthClient';
import { AuthClient } from './AuthClient.abstract';
import { PostMessageSender } from './postMessaging';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { ExtensionMessageAuthClient } from './ExtensionMessageAuthClient';

const logger = createBrowserLogger('useAuthClientAndFrameRef');

export const useAuthClientAndFrameRef = () => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);

  const frameRef = useRef<HTMLIFrameElement>(null);
  const [authOrigin, setAuthOrigin] = useState('');
  const [ingestDest, setIngestDest] = useState('');
  useEffect(() => {
    // this uses the intake origin so that local testing works (they are otherwise the same)
    recordEnvironment.getDestinationOption().then(setIngestDest);
    recordEnvironment.getOrigin('intake').then(setAuthOrigin);
  }, []);

  useEffect(() => {
    if (!authOrigin || !ingestDest) return;
    if (!frameRef.current) {
      logger.warn(
        'no current value for frameRef. The iframe that this ref refers to should always be rendered',
      );
      return;
    }

    const sender = new PostMessageSender(frameRef.current, authOrigin);
    const authClientInstance =
      ingestDest === 'screencastify'
        ? new ExtensionMessageAuthClient(sender)
        : new PostMessageAuthClient(sender);
    authClientInstance.init();
    setAuthClient(authClientInstance);
    return () => sender.destroy();
  }, [authOrigin, ingestDest]);

  return {
    frameRef,
    authClient,
  };
};
