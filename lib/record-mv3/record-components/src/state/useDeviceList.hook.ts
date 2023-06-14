import { useEffect, useState } from 'react';
import { DeviceList } from './deviceList.mst';

export const useDeviceList = () => {
  const [deviceList] = useState(() => DeviceList.create());
  const [deviceListError, setError] = useState<Error>();
  const [cameraDetected, setCameraDetected] = useState(false);
  const [micDetected, setMicDetected] = useState(false);

  useEffect(() => {
    const syncDevicesToList = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        // checking for detectable input devices - can't rely on using deviceList for this
        // because before permissions for devices are granted, deviceIds are empty
        // deviceList.update will only add in the first device type when that deviceId is ''
        // so it will appear as if a webcam is never detected even if it exists
        const hasCam = devices.some((device) => {
          return device.kind === 'videoinput';
        });
        const hasMic = devices.some((device) => {
          return device.kind === 'audioinput';
        });
        setCameraDetected(hasCam);
        setMicDetected(hasMic);

        deviceList.update(devices);
      } catch (error) {
        // Coerce all errors into instance of Error.
        setError(
          error instanceof Error
            ? error
            : new Error(JSON.stringify(error, null, 2)),
        );
      }
    };
    syncDevicesToList();
    navigator.mediaDevices.addEventListener('devicechange', syncDevicesToList);
    return () => {
      navigator.mediaDevices.removeEventListener(
        'devicechange',
        syncDevicesToList,
      );
    };
  }, [deviceList]);

  // micDetected and camDetected are currently being used in the control panel to help
  // with conditional ui rendering and messaging
  return {
    deviceList,
    deviceListError,
    micDetected,
    cameraDetected,
    clearDeviceListError: () => setError(undefined),
  };
};
