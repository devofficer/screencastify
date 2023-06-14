import { createBrowserLogger } from '@castify/studio/observability/browser';
import { GenericMessageProtocol, Handlers, Messages } from '@castify/messaging';

/**
 * @param handlers
 * @returns handler function that can be passed to chrome's onMessage.addListener
 *  method, which will handle named protocol events with strictly typed payloads and
 *  responses
 */
export function createProtocolHandler<
  ProtocolDefinition extends GenericMessageProtocol<ProtocolDefinition>,
>(handlers: Handlers<ProtocolDefinition>) {
  const logger = createBrowserLogger('createProtocolHandler');
  logger.info('Created Protocol Handler');
  return (
    message: Messages<ProtocolDefinition>,
    _sender: chrome.runtime.MessageSender,
    sendResponse: (response: unknown) => void,
  ) => {
    (async () => {
      const handler = handlers[message.command];

      if (!handler) {
        logger.warn(`unknown command: ${String(message.command)}`);
        return;
      }

      logger.debug('handling message', { message });
      const response = await handler(message);

      logger.debug('sending response', { response });
      sendResponse(response);
    })();
    return true;
  };
}
