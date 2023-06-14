import { SnapshotIn } from 'mobx-state-tree';
import { ControllerState } from './controllerState.mst';

import makeInspectable from 'mobx-devtools-mst';
import { ControllerStorageDriver } from '../controller/storage/ControllerStorageDriver';
//TODO look at studio implementation and see if we can use error handling and observability code here
/**
 * Intended to be passed into Root() on app mount to create the root MST store.
 * Also useful for creating an empty root edit store against which to run tests.
 */
export const initialState: SnapshotIn<typeof ControllerState> = {};

/**
 * Returns an instance of the root store deserialized from initial state
 * defined above.
 *
 * @param env - Environment-specific variables to be injected into the tree
 */
export const createControllerInitialState = async () => {
  const state = await ControllerStorageDriver.getControllerState();
  const root = ControllerState.create(state);
  makeInspectable(root);

  return root;
};
