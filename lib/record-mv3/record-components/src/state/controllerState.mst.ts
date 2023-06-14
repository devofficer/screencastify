import { Instance, types } from 'mobx-state-tree';
import {
  IRecordingInProgress,
  RecordingInProgress,
} from './recordingInProgress.mst';
import { IRecordingSettings, RecordingSettings } from './recordingSettings.mst';
import { UserState } from './userState.mst';

export const ControllerState = types
  .model('ControllerState', {
    recorderStatus: types.optional(
      types.union(
        types.literal('initialized'),
        types.literal('acquiring-media'),
        types.literal('counting-in'),
        types.literal('recording'),
        types.literal('paused'),
        types.literal('stopped'),
        types.literal('error'),
        types.literal(undefined),
      ),
      'initialized',
    ),
    recordingSettings: types.optional(RecordingSettings, {}),
    recordingInProgress: types.optional(RecordingInProgress, {}),
    userState: types.optional(UserState, {}),
  })
  .actions((self) => {
    return {
      setRecordingSettings(settings: IRecordingSettings) {
        self.recordingSettings = settings;
      },
      setRecordingRecordingInProgress(
        recordingInProgress: IRecordingInProgress,
      ) {
        self.recordingInProgress = recordingInProgress;
      },
      setRecorderStatus(
        value:
          | 'initialized'
          | 'acquiring-media'
          | 'counting-in'
          | 'recording'
          | 'paused'
          | 'stopped'
          | 'error',
      ) {
        self.recorderStatus = value;
      },
    };
  });

export type IControllerState = Instance<typeof ControllerState>;
