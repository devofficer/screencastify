import { types } from 'mobx-state-tree';
import MediaDevice from './mediaDevice';

export const DeviceList = types
  .model('MediaDeviceList', {
    /** MediaDevices as supplied by navigator.mediaDevices.enumerateDevices */
    mediaDevices: types.map(MediaDevice),
  })
  .views((self) => {
    const filterDevicesByKind = (kind: MediaDeviceKind) =>
      Array.from(self.mediaDevices.values()).filter(
        (device) => device.kind === kind,
      );

    return {
      /** List the audio inputs available for recording. */
      get audioInputs() {
        return filterDevicesByKind('audioinput');
      },
      /** List the video inputs available for recording. */
      get videoInputs() {
        return filterDevicesByKind('videoinput');
      },
    };
  })
  .actions((self) => {
    return {
      update(deviceInfoList: MediaDeviceInfo[]) {
        self.mediaDevices.clear();
        for (const deviceInfo of deviceInfoList) {
          //Since we are using a map and input devices are read first we are short circuiting
          //updating the previously added input devices that are also output devices
          if (!self.mediaDevices.get(deviceInfo.deviceId))
            self.mediaDevices.put({
              deviceId: deviceInfo.deviceId,
              groupId: deviceInfo.groupId,
              label: deviceInfo.label,
              kind: deviceInfo.kind,
            });
        }
      },
    };
  });
