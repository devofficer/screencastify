import {
  createBrowserLogger,
  IBrowserLogger,
} from '@castify/studio/observability/browser';
import { useEffect, useState } from 'react';

const logger: IBrowserLogger = createBrowserLogger('useMediaDeviceAccess');

export class UndefinedDevice extends Error {}

export const useMediaDeviceAccess = () => {
  const [pendingRequest, setPendingRequest] = useState(true);
  const [recheckSwitch, setRecheckSwitch] = useState(false);

  // If the browser allows mic or camera
  const [browserMicAccessGranted, setBrowserMicAccessGranted] = useState(false);
  const [browserCameraAccessGranted, setBrowserCameraAccessGranted] =
    useState(false);

  const [someBrowserPermissionDenied, setSomeBrowserPermissionDenied] =
    useState(false);

  // If the OS allows mic or camera to the browser (mainly for mac)
  const [systemMicAccessGranted, setSystemMicAccessGranted] = useState(false);
  const [systemCameraAccessGranted, setSystemCameraAccessGranted] =
    useState(false);

  const [systemPermissionsBlocked, setSystemPermissionsBlocked] =
    useState(false);

  const recheck = () => setRecheckSwitch((value) => !value);

  useEffect(() => {
    const checkBrowserLevelAccess = async () => {
      try {
        // These need to be saved as variables and passed in as such
        // passing in typecasted strings inline will not work.
        // I have no idea why, ask the Chrome team
        const microphone = 'microphone' as PermissionName;
        const camera = 'camera' as PermissionName;

        setBrowserMicAccessGranted(false);
        setBrowserCameraAccessGranted(false);

        setSomeBrowserPermissionDenied(false);

        // On mac, if you allow chrome to use the camera and mic, then revoke it,
        // these will still return true, but the device will be disabled at the system level
        const micStatus = await navigator.permissions.query({
          name: microphone,
        });
        const camStatus = await navigator.permissions.query({
          name: camera,
        });

        if (micStatus.state === 'granted') {
          setBrowserMicAccessGranted(true);
        }
        if (camStatus.state === 'granted') {
          setBrowserCameraAccessGranted(true);
        }
        if (micStatus.state === 'denied' || camStatus.state === 'denied') {
          setSomeBrowserPermissionDenied(true);
        }
        // Note that if the state of the permission is 'prompt', we don't flag it as denied
      } catch (error) {
        logger.warn('Failed to obtain device access permissions.', {
          error: error,
        });
        setBrowserMicAccessGranted(false);
        setBrowserCameraAccessGranted(false);
        setSomeBrowserPermissionDenied(true);
      }
    };

    const checkSystemLevelAccess = async () => {
      setSystemPermissionsBlocked(false);

      // We don't actually use the media stream, this just allows us to check if
      // there is access to one of these devices at the system level. Like it says above,
      // the edge case of having browser permissions enabled and system permissions
      // disabled can get really ugly.
      try {
        setSystemMicAccessGranted(false);
        const device = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        device.getTracks().forEach((track) => track.stop());

        setSystemMicAccessGranted(true);
      } catch (error) {
        if (error instanceof Error && error.name === 'NotAllowedError') {
          logger.warn(
            'Browser does not have OS level permissions for microphone device',
          );
          setSystemPermissionsBlocked(true);
        }
        setSystemMicAccessGranted(false);
      }

      try {
        setSystemCameraAccessGranted(false);
        const device = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true,
        });
        device.getTracks().forEach((track) => track.stop());

        setSystemCameraAccessGranted(true);
      } catch (error) {
        if (error instanceof Error && error.name === 'NotAllowedError') {
          logger.warn(
            'Browser does not have OS level permissions for camera device',
          );
          setSystemPermissionsBlocked(true);
        }
        setSystemCameraAccessGranted(false);
      }
    };

    const checkAccess = async () => {
      setPendingRequest(true);
      await checkSystemLevelAccess();
      await checkBrowserLevelAccess();

      setPendingRequest(false);
    };
    checkAccess();
  }, [recheckSwitch]);

  return {
    browserMicAccessGranted,
    browserCameraAccessGranted,
    someBrowserPermissionDenied,
    systemMicAccessGranted,
    systemCameraAccessGranted,
    systemPermissionsBlocked,
    pendingRequest,
    recheck,
  };
};
