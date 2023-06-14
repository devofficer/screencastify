import { sendTabMessage } from '@castify/record-mv3/chrome-messaging';
import { Messages } from '@castify/messaging';
import { createBrowserLogger } from '@castify/studio/observability/browser';

export interface BaseDOMInjectionMessages {
  setup: { payload: Record<string, never>; response: void };
  teardown: { payload: Record<string, never>; response: void };
  present: { payload: string; response: boolean };
}

export class ScriptInjectionController {
  constructor(private targetTabId: number, private scriptPath: string) {}
  private logger = createBrowserLogger('ScriptInjectionController');

  private async sendMessage(message: Messages<BaseDOMInjectionMessages>) {
    return sendTabMessage<BaseDOMInjectionMessages>(this.targetTabId, message);
  }

  async setup() {
    this.logger.info('ScriptInjectionController#setup');
    if (await this.isTargetInjectableURL()) return;
    await this.ensureBaseDomInjection();
    try {
      await this.sendMessage({ command: 'setup', payload: {} });
    } catch (e) {
      this.logger.error('Failed to setup the active tab', { e });
    }
  }

  async teardown() {
    this.logger.info('ScriptInjectionController#teardown');
    try {
      await this.sendMessage({ command: 'teardown', payload: {} });
    } catch (e) {
      this.logger.error('Failed to teardown the active tab', { e });
    }
  }

  private async isTargetInjectableURL() {
    const targetTab = await chrome.tabs.get(this.targetTabId);
    return (
      !targetTab.url ||
      targetTab.url?.includes('chrome://') ||
      targetTab.url?.includes('chrome-extension://') ||
      targetTab.url?.includes('chrome.google.com/webstore/') ||
      targetTab.url?.includes('file://')
    );
  }

  private async ensureBaseDomInjection() {
    try {
      const isInjected = await this.sendMessage({
        command: 'present',
        payload: this.scriptPath,
      });
      if (isInjected === true) {
        return;
      }
    } catch (error) {
      this.logger.warn(`Failed to communicate with active tab`, {
        error: chrome.runtime.lastError,
      });
    }

    this.logger.debug(
      `Content script ${this.scriptPath} not present, injecting.`,
    );
    await chrome.scripting.executeScript({
      target: { tabId: this.targetTabId },
      files: [this.scriptPath],
    });
  }
}
