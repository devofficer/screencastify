import { findOrCreateControllerTab } from '../../tabs/findOrCreateControllerTab';
import { findActiveTab } from '../../tabs/findActiveTab';
import { sendRuntimeMessage } from '@castify/record-mv3/chrome-messaging';

export type ControllerProtocolDefinition = {
  RECORDING_CONTROLLER_START: {
    payload: {
      activeTabId: number;
      activeStreamId?: string;
      isCurrentTabInjectable: boolean;
    };
    response: void;
  };

  RECORDING_CONTROLLER_STOP: {
    payload: Record<string, never>;
    response: void;
  };

  RECORDING_CONTROLLER_PAUSE: {
    payload: Record<string, never>;
    response: void;
  };

  RECORDING_CONTROLLER_RESUME: {
    payload: Record<string, never>;
    response: void;
  };

  RECORDING_CONTROLLER_CLOSE: {
    payload: Record<string, never>;
    response: void;
  };

  RECORDING_CONTROLLER_DELETE: {
    payload: Record<string, never>;
    response: void;
  };
  RECORDING_CONTROLLER_RESTART: {
    payload: {
      isCurrentTabInjectable: boolean;
    };
    response: void;
  };
};

export const ControllerCommandProtocol = {
  async start(isCurrentTabInjectable: boolean): Promise<void> {
    const controllerTab = await findOrCreateControllerTab();
    const activeTab = await findActiveTab();
    if (!(controllerTab?.id && activeTab?.id)) {
      throw new Error('Need both controllerTab and activeTab');
    }
    await sendRuntimeMessage<ControllerProtocolDefinition>({
      command: 'RECORDING_CONTROLLER_START',
      payload: {
        activeTabId: activeTab.id,
        isCurrentTabInjectable,
      },
    });
  },
  async stop(): Promise<void> {
    await sendRuntimeMessage<ControllerProtocolDefinition>({
      command: 'RECORDING_CONTROLLER_STOP',
      payload: {},
    });
  },
  async pause(): Promise<void> {
    await sendRuntimeMessage<ControllerProtocolDefinition>({
      command: 'RECORDING_CONTROLLER_PAUSE',
      payload: {},
    });
  },
  async resume(): Promise<void> {
    await sendRuntimeMessage<ControllerProtocolDefinition>({
      command: 'RECORDING_CONTROLLER_RESUME',
      payload: {},
    });
  },
  async close(): Promise<void> {
    await sendRuntimeMessage<ControllerProtocolDefinition>({
      command: 'RECORDING_CONTROLLER_CLOSE',
      payload: {},
    });
  },
  async delete(): Promise<void> {
    await sendRuntimeMessage<ControllerProtocolDefinition>({
      command: 'RECORDING_CONTROLLER_DELETE',
      payload: {},
    });
  },
  async restart(isCurrentTabInjectable: boolean): Promise<void> {
    await sendRuntimeMessage<ControllerProtocolDefinition>({
      command: 'RECORDING_CONTROLLER_RESTART',
      payload: { isCurrentTabInjectable },
    });
  },
};
