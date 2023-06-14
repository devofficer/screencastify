import { Instance, types } from 'mobx-state-tree';

export const RecordingSettings = types
  .model('RecordingSettings', {
    recordingType: types.optional(
      types.union(
        types.literal('tab'),
        types.literal('desktop'),
        types.literal('camera'),
      ),
      'tab',
    ),

    useAudioDevice: true,
    selectedAudioDeviceId: types.maybeNull(types.string),

    useVideoDevice: true,
    selectedVideoDeviceId: types.maybeNull(types.string),

    useCountIn: true,
    countInDuration: types.optional(
      types.union(types.literal(3), types.literal(5), types.literal(10)),
      3,
    ),

    useAnnotationTools: false,
    useTabAudio: true,

    // All pip related fields in this file represent
    // user preferences or if Pip will be used, they do NOT
    // represent if the camera is currently popped out
    pipEnabledWhenAvailable: true,
  })
  .views((self) => {
    return {
      get pipEnabled(): boolean {
        return (
          self.recordingType === 'desktop' &&
          self.useVideoDevice &&
          self.pipEnabledWhenAvailable
        );
      },
    };
  })
  .actions((self) => {
    return {
      setRecordingType(value: 'tab' | 'desktop' | 'camera') {
        self.recordingType = value;
      },
      setUseAudioDevice(value: boolean) {
        self.useAudioDevice = value;
      },
      setSelectedAudioDeviceId(id: string) {
        self.selectedAudioDeviceId = id;
      },
      setSelectedVideoDeviceId(id: string) {
        self.selectedVideoDeviceId = id;
      },
      setUseVideoDevice(value: boolean) {
        self.useVideoDevice = value;
      },
      toggleUseVideoDevice() {
        self.useVideoDevice = !self.useVideoDevice;
      },
      setUseCountIn(value: boolean) {
        self.useCountIn = value;
      },
      setCountInDuration(value: 3 | 5 | 10) {
        self.countInDuration = value;
      },
      setUseAnnotationTools(value: boolean) {
        self.useAnnotationTools = value;
      },
      setUseTabAudio(value: boolean) {
        self.useTabAudio = value;
      },
      setPipEnabled(value: boolean) {
        self.pipEnabledWhenAvailable = value;
      },
    };
  });

export type IRecordingSettings = Instance<typeof RecordingSettings>;
