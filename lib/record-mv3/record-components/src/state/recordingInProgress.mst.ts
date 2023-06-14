import { Instance, types } from 'mobx-state-tree';

export const RecordingInProgress = types
  .model('RecordingInProgress', {
    recordingId: types.optional(types.string, ''),
    duration: types.optional(types.number, 0),
    countInTimeRemaining: types.optional(types.number, 0),
    uploadStatus: types.optional(
      types.union(
        types.literal('not-started'),
        types.literal('in-progress'),
        types.literal('complete'),
      ),
      'not-started',
    ),
  })
  .views((self) => {
    return {
      hasUploadCompleted() {
        return self.uploadStatus === 'complete';
      },
    };
  })
  .actions((self) => {
    return {
      setUploadStatus(value: 'not-started' | 'in-progress' | 'complete') {
        self.uploadStatus = value;
      },
    };
  });

export type IRecordingInProgress = Instance<typeof RecordingInProgress>;
