import { createBrowserLogger } from '@castify/studio/observability/browser';
import { GenericMessageProtocol, Messages } from '@castify/messaging';

type TabId = number | undefined;

export async function sendRuntimeMessage<
  Protocol extends GenericMessageProtocol<Protocol>,
>(message: Messages<Protocol>) {
  const logger = createBrowserLogger('sendRuntimeMessage');
  logger.info('Sending runtime message: ', { message });
  return new Promise<Protocol[typeof message.command]['response']>(
    (resolve, reject) => {
      chrome.runtime.sendMessage(message, (result) => {
        if (chrome.runtime.lastError) {
          logger.warn('error sending runtime message', {
            error: chrome.runtime.lastError,
            message: message,
          });
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
        }
      });
    },
  );
}

export async function sendRuntimeMessageByExtensionId<
  Protocol extends GenericMessageProtocol<Protocol>,
>(extensionId: string, message: Messages<Protocol>) {
  const logger = createBrowserLogger('sendRuntimeMessageByExtensionId');
  logger.info('Sending runtime message by Extension Id: ', { message });
  return new Promise<Protocol[typeof message.command]['response']>(
    (resolve, reject) => {
      chrome.runtime.sendMessage(extensionId, message, (result) => {
        if (chrome.runtime.lastError) {
          logger.warn('error sending runtime message', {
            error: chrome.runtime.lastError,
            message: message,
          });
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
        }
      });
    },
  );
}

export async function sendTabMessage<
  Protocol extends GenericMessageProtocol<Protocol>,
>(tabId: TabId, message: Messages<Protocol>) {
  const logger = createBrowserLogger('sendTabMessage');
  logger.info('Sending tab message: ', { message });
  return new Promise<Protocol[typeof message.command]['response']>(
    (resolve, reject) => {
      chrome.tabs.sendMessage(tabId as number, message, (result) => {
        if (chrome.runtime.lastError) {
          logger.warn('error sending tab message', {
            error: chrome.runtime.lastError,
            message: message,
          });
          reject(chrome.runtime.lastError);
        } else {
          resolve(result);
        }
      });
    },
  );
}
