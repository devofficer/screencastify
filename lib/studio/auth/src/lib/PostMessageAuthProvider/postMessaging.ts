/**
 * This file is still a bit of a mess and not directly tested, because it's
 * going to be extracted into a generalized messaging library as part of
 * the immediately following work on progressive upload. I've written tests
 * for everything that uses these classes in the postmessaging auth client,
 * so the refactoring job will have that safety net
 */

import { createBrowserLogger } from '@castify/studio/observability/browser';
import { v4 as uuidv4 } from 'uuid';

const debugCommandMessage = (
  commandMessage: CommandMessage,
  debugMessage: string,
) => {
  // eslint-disable-next-line no-console
  console.debug(
    'DEBUGGER',
    commandMessage.requestId,
    commandMessage.command,
    debugMessage,
  );
};

class TimedOutError extends Error {}

export interface CommandMessage {
  command: string;
  payload?: unknown;
  requestId?: string;
}

const REQUEST_TIMEOUT = 5000;

type WindowEventHandler = (evt: MessageEvent) => void | Promise<void>;

export interface MessageSender {
  post: (message: CommandMessage) => void;
  send: (message: CommandMessage) => Promise<unknown>;
  destroy: () => void;
}

export class PostMessageSender implements MessageSender {
  private logger = createBrowserLogger('postMessageSender');
  private handlersToCleanup: WindowEventHandler[] = [];

  constructor(
    private frame: HTMLIFrameElement,
    private destinationOrigin: string,
  ) {}

  post(message: CommandMessage) {
    this.frame.contentWindow?.postMessage(message, this.destinationOrigin);
  }

  async send(message: CommandMessage): Promise<unknown> {
    await this.ensureConnected();
    return this.sendWithoutConnectionCheck(message);
  }

  private attachResponseHandler(handler: WindowEventHandler) {
    this.handlersToCleanup.push(handler);
    window.addEventListener('message', handler);
  }

  private removeResponseHandler(handler: WindowEventHandler) {
    this.handlersToCleanup = this.handlersToCleanup.filter(
      (h) => h !== handler,
    );
    window.removeEventListener('message', handler);
  }

  private async sendWithoutConnectionCheck(message: CommandMessage) {
    return new Promise((resolve, reject) => {
      message.requestId = uuidv4();

      const responseHandler = (event: MessageEvent<CommandMessage>) => {
        const response = event.data;
        if (
          event.origin === this.destinationOrigin &&
          response.requestId === message.requestId
        ) {
          debugCommandMessage(event.data, 'received response');
          this.removeResponseHandler(responseHandler);
          clearTimeout(timeout);
          resolve(response.payload);
        }
      };

      const timeout = setTimeout(() => {
        this.removeResponseHandler(responseHandler);
        reject(
          new TimedOutError(
            `request ID ${message.requestId} timed out waiting for a response`,
          ),
        );
      }, REQUEST_TIMEOUT);

      this.attachResponseHandler(responseHandler);
      debugCommandMessage(message, 'sending request');
      this.post(message);
    });
  }

  destroy() {
    this.handlersToCleanup.forEach(this.removeResponseHandler);
  }

  // @TODO - Should probably be made into an actual heartbeat
  private async ensureConnected() {
    try {
      await this.sendWithoutConnectionCheck({ command: 'CFY-PING' });
    } catch (err) {
      if (err instanceof TimedOutError) {
        this.logger.debug('no connection, retrying ping');
        await this.ensureConnected();
      } else {
        throw err;
      }
    }
  }
}

type MessageHandler = (m: CommandMessage) => Promise<unknown>;
type MessageHandlers = {
  [key: string]: MessageHandler;
};

export class PostMessageReceiver {
  private handlersToCleanup: WindowEventHandler[] = [];
  private logger = createBrowserLogger('PostMessageReceiver');

  constructor(handlers: MessageHandlers, private origin: string) {
    this.attachHandlers(handlers);
  }

  destroy() {
    this.handlersToCleanup.forEach((handler) => {
      window.removeEventListener('message', handler);
    });
  }

  attachHandlers(handlers: MessageHandlers) {
    // can't use `this` context within the mainHandler function,
    // because it will point to the window object at runtime
    const safeOrigin = this.origin;
    const logger = this.logger;
    const mainHandler = async (event: MessageEvent<CommandMessage>) => {
      if (event.origin !== safeOrigin || !handlers[event.data.command]) {
        return;
      }

      debugCommandMessage(event.data, 'handling request');
      const message = event.data;
      const handler = handlers[message.command] || (async () => {});

      const response: CommandMessage = {
        requestId: message.requestId,
        command: `${message.command}-ACK`,
        payload: null,
      };
      try {
        response.payload = await handler(message);
      } catch (error) {
        response.command = `${message.command}-ERROR`;
        response.payload = null;
        logger.error('Error executing message handler', { error });
      } finally {
        (event.source as WindowProxy).postMessage(response, safeOrigin);
      }
    };

    this.handlersToCleanup.push(mainHandler);
    window.addEventListener('message', mainHandler);
  }
}
