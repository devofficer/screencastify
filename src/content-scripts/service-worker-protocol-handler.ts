import { GenericMessageProtocol, Messages, Handlers } from '@castify/messaging';
import { ServiceWorkerLogger } from '@castify/record-mv3/observability/service-worker';
export function createServiceWorkerProtocolHandler<
  ProtocolDefinition extends GenericMessageProtocol<ProtocolDefinition>,
>(handlers: Handlers<ProtocolDefinition>, logger: ServiceWorkerLogger) {
  logger.info('Created Protocol Handler');
  return (
    message: Messages<ProtocolDefinition>,
    _sender: chrome.runtime.MessageSender,
    sendResponse: (response: unknown) => void,
  ) => {
    (async () => {
      const handler = handlers[message.command];

      if (!handler) {
        message.command &&
          logger.warn(`unknown command: ${String(message.command)}`);
        return;
      }
      const response = await handler(message);
      sendResponse(response);
    })();
    return true;
  };
}
