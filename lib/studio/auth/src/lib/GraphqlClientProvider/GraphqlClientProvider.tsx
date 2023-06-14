import React from 'react';
import { Provider } from 'urql';
import {
  createClient,
  cacheExchange,
  dedupExchange,
  fetchExchange,
  Client,
  CombinedError,
} from '@urql/core';
import { devtoolsExchange } from '@urql/devtools';
import { retryExchange, RetryExchangeOptions } from '@urql/exchange-retry';
import { environment } from '@castify/studio/env/browser';
import authExchange from './authExchange';
import subscriptionExchange from './subscriptionExchange';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import type { IBrowserLogger } from '@castify/studio/observability/browser';
import { useGetStudioJWT } from '../useGetStudioJWT';

// expose below vars for unit test
export const logger: IBrowserLogger = createBrowserLogger(
  'GraphqlClientProvider',
);
export const retryOptions: RetryExchangeOptions = {
  initialDelayMs: 400, // 40 milliseconds
  // retryExchange keeps increasing the time between retries with a random back-off factor multiplied by the initialDelayMs, this option ensures we don't exceed a certain threshold
  maxDelayMs: 15000, // 15 seconds
  // when this option is false, time between attempts will only increase with the initialDelayMs
  randomDelay: true,
  maxNumberAttempts: 5,
  retryIf: (error: CombinedError): boolean => {
    // log retry attempts
    logger.warn(`retrying due to error:`, { error });
    return !!(error && error.networkError);
  },
};

/**
 * This provider makes the instance of the URQL clint available for use in the
 * React tree. We typically won't use it directly, but instead via hooks
 * from the urql library which internally make use of the provided client.
 */
const GraphqlClientProvider: React.FC<{
  client?: Client;
  httpHasuraUrl: string;
}> = (props) => {
  /**
   *
   * If you have come to this file looking for a way to inject a mock the gql
   * client, you can probably get by with using the urql `Provider` to wrap
   * the component under test. See here:
   * https://formidable.com/open-source/urql/docs/advanced/testing/
   *
   * You may also wish to mock the auto-generated hook via a Jest import mock.
   *
   * For integration or e2e contexts where we can't avoid rendering the root
   * wrapped in the provider in this file, this variable can be made mutable and
   * closed over inside of an exported function which allows overriding the client
   * with a mock. But, you probably don't need to do this.
   */

  const getJwt = useGetStudioJWT();
  /**
   * For more on what URQL exchanges are, see here:
   * {@link https://formidable.com/open-source/urql/docs/architecture/}
   */
  const exchanges = [
    /**
     * We may eventually need to switch to graphCache:
     * {@link https://formidable.com/open-source/urql/docs/graphcache/}
     *
     * If you are looking at this file because you are struggling to get a
     * query to refetch or to bust the cache, consider whether it makes sense
     * to use a `requestPolicy` to mark a query as `cache-and-network` or
     * perhaps even `network-only`.
     * {@link https://formidable.com/open-source/urql/docs/basics/react-preact/#request-policies}
     *
     * The cacheExchange is part of default urql setup. It is injected here for document cache:
     * {@link https://formidable.com/open-source/urql/docs/basics/document-caching/}
     */
    cacheExchange,
    /**
     * dedupExchange is part of default urql setup
     */
    dedupExchange,
    /**
     * authExchange is an asynchronous exchange, so it must be placed in front of all
     * `fetchExchange`s but after all other synchronous exchanges, like the `cacheExchange`
     */
    authExchange(getJwt),
    /**
     * retryExchange should be placed prior to the fetchExchange and after the cacheExchange for it to function correctly.
     */
    retryExchange(retryOptions),
    /**
     * fetchExchange is part of default urql setup
     */
    fetchExchange,
    /**
     * create an subscription exchange to listen for updates from the database
     */
    subscriptionExchange(getJwt),
  ];

  /**
   * In a non-prod context we add in Formidable Labs' chrome extension
   * helper for URQL
   * {@link https://chrome.google.com/webstore/detail/urql-devtools/mcfphkbpmkbeofnkjehahlmidmceblmm}
   */
  if (!environment.production) {
    exchanges.unshift(devtoolsExchange);
  }

  /**
   * Create the main client itself, which we return.
   */
  const client =
    props.client ||
    createClient({
      url: props.httpHasuraUrl,
      exchanges,
    });

  return <Provider value={client}>{props.children}</Provider>;
};

export default GraphqlClientProvider;
