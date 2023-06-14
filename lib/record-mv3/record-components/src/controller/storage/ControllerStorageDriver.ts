import { SnapshotIn } from 'mobx-state-tree';
import { IControllerState } from '../../state/controllerState.mst';
import { RecordingInProgress } from '../../state/recordingInProgress.mst';
import { IRecordingSettings } from '../../state/recordingSettings.mst';
import { IUserState } from '../../state/userState.mst';

interface GetControllerTabIDResult {
  controllerTabId: number;
}
/**
 * ControllerStorageDriver is intended to be the only place where the chrome.storage.local
 * API is used to read/write data for the recording controller.
 *
 * This will probably cover most of the extension. And certainly everything related to
 * recording settings and the current recording state.
 */
export const ControllerStorageDriver = {
  /**
   * get controller tab ID
   *
   * @param recordingSettings
   */
  async getControllerTabId(): Promise<GetControllerTabIDResult> {
    const storageResult = (await chrome.storage.local.get([
      'controllerTabId',
    ])) as GetControllerTabIDResult;
    return storageResult;
  },
  /**
   * Replaces the entire recordingSettings value.
   *
   * Merging with existing data will need to be handled by the caller.
   * (This is handled by the mobx-state-tree code in the useSyncedState hook, so if you're
   *  using that hook, you're in good shape.)
   *
   * @param recordingSettings
   */
  async replaceRecordingSettings(
    recordingSettings: IRecordingSettings,
  ): Promise<void> {
    await chrome.storage.local.set({ recordingSettings });
  },

  /**
   * Replaces the entire recordingInProgress value.
   *
   * Merging with existing data will need to be handled by the caller.
   * (This is handled by the mobx-state-tree code in the useSyncedState hook, so if you're
   *  using that hook, you're in good shape.)
   *
   * @param recordingInProgress
   */
  async replaceRecordingInProgress(
    recordingInProgress: SnapshotIn<typeof RecordingInProgress>,
  ): Promise<void> {
    await chrome.storage.local.set({ recordingInProgress });
  },

  /**
   * Sets the recorder status, only the recording controller is expected to use this
   * part of the protocol.
   */
  async setRecorderStatus(
    recorderStatus: IControllerState['recorderStatus'],
  ): Promise<void> {
    await chrome.storage.local.set({ recorderStatus });
  },

  /**
   * Reset the recorder status to it's resting state.
   * This is intended to indicate the controller is not active.
   *
   * Only the recording controller is expected to use this part of the protocol.
   */
  async resetRecorderStatus(): Promise<void> {
    await chrome.storage.local.remove('recorderStatus');
  },

  /**
   * Reset the recorder status to it's resting state.
   * This is intended to indicate the controller is not active.
   *
   * Only the recording controller is expected to use this part of the protocol.
   */
  async resetRecordingInProgress(): Promise<void> {
    await chrome.storage.local.remove('recordingInProgress');
  },

  async setUserState(userState: IUserState) {
    return await chrome.storage.local.set({ userState });
  },

  async getUserState() {
    return await chrome.storage.local.get(['userState']);
  },

  /**
   * Subscribe to chrome storage event changes.
   *
   * Returns a disposer function suitable for use with react's useEffect:
   *
   * useEffect(() => {
   *  // this will properly clean up when the component unmounts
   *  return createDisposableSubscription(myHandler);
   * })
   */
  createDisposableSubscription(changeListener: () => void): void {
    // FIXME: guard that event happened on controllerState key
    // @ts-expect-error - local.onChanged isn't in type def
    chrome.storage.local.onChanged.addListener(changeListener);

    // @ts-expect-error - local.onChanged isn't in type def
    return () => chrome.storage.local.onChanged.removeListener(changeListener);
  },

  /**
   * Read the entire controller state out of chrome local storage
   */
  async getControllerState() {
    return (await chrome.storage.local.get([
      'recorderStatus',
      'recordingSettings',
      'recordingInProgress',
      'userState',
    ])) as IControllerState;
  },
};
