import { createBrowserLogger } from '@castify/studio/observability/browser';
import { reaction } from 'mobx';
import { applySnapshot, getSnapshot } from 'mobx-state-tree';
import { useEffect } from 'react';
import { useControllerState } from '../../state/ControllerStateProvider';
import { IRecordingSettings } from '../../state/recordingSettings.mst';
import { ControllerStorageDriver } from './ControllerStorageDriver';

const logger = createBrowserLogger('useSyncedControllerState');

export const useSyncedControllerState = () => {
  const controllerState = useControllerState();

  useEffect(() => {
    return reaction(
      () => getSnapshot(controllerState.recordingSettings),
      (snapshot) => {
        logger.debug('New snapshot of recording Settings', {
          snapshot: snapshot,
        });
        ControllerStorageDriver.replaceRecordingSettings(
          snapshot as IRecordingSettings,
        );
      },
    );
  }, [controllerState.recordingSettings]);

  // User state needs its own effect for syncing
  useEffect(() => {
    return reaction(
      () => getSnapshot(controllerState.userState),
      (snapshot) => {
        logger.debug('New snapshot of userState', {
          snapshot: snapshot,
        });
        // The MST type has a getter for freeTierEnabled,
        // but the type expects a property (that isn't needed)
        // @ts-expect-error key freeTierEnabled is missing
        ControllerStorageDriver.setUserState(snapshot);
      },
    );
  }, [controllerState.userState]);

  useEffect(() => {
    async function syncControllerState() {
      const state = await ControllerStorageDriver.getControllerState();
      applySnapshot(controllerState, state);
    }
    return ControllerStorageDriver.createDisposableSubscription(
      syncControllerState,
    );
  }, [controllerState]);

  return controllerState;
};
