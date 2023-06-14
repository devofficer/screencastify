import { ScreencastifyLogoMarkWhite } from '@castify/record-mv3/common';
import {
  InvalidDevice,
  useControllerState,
} from '@castify/record-mv3/record-components';
import {
  createBrowserLogger,
  IBrowserLogger,
} from '@castify/studio/observability/browser';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import styles from './Webcam.styles';

const logger: IBrowserLogger = createBrowserLogger('Webcam');

interface IWebCamProps {
  isCircular: boolean;
  invalidDeviceHandler?: (isValid: boolean) => void;
  variant: 'sm' | 'lg';
}
const Webcam = observer((props: IWebCamProps) => {
  const [isValidDevice, setIsValidDevice] = useState(true);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { recordingSettings } = useControllerState();

  const [hasVideoSource, setHasVideoSource] = useState(false);

  const getWebcamStyle = () => {
    if (props.variant === 'sm' && props.isCircular)
      return {
        webCamStyle: styles.circularCamSmall,
        messageStyle: styles.messageStyleSmall,
        typographyVariant: 'body1',
      };
    else if (props.variant === 'lg' && props.isCircular)
      return {
        webCamStyle: styles.circularCamLarge,
        messageStyle: styles.messageStyleLarge,
        typographyVariant: 'h4',
      };
    else {
      return {
        webCamStyle: styles.webcamStyle,
        messageStyle: styles.messageStyle,
        typographyVariant: 'h1',
      };
    }
  };

  useEffect(() => {
    const makeWebcam = async () => {
      setIsValidDevice(true);
      try {
        mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: recordingSettings.selectedVideoDeviceId as string,
            width: { ideal: 1280 },
            height: { ideal: 720 },
            frameRate: { ideal: 30 },
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStreamRef.current;
          videoRef.current.autoplay = true;
          setHasVideoSource(true);
        }
        logger.info('Successfully made webcam');
      } catch (error) {
        logger.info('User selected invalid video device');
        setIsValidDevice(false);
      }
    };
    logger.debug('DEBUG WEBCAM EFFECT', {
      videoDeviceId: recordingSettings.selectedVideoDeviceId,
    });
    makeWebcam();
  }, [recordingSettings.selectedVideoDeviceId]);

  useEffect(() => {
    props.invalidDeviceHandler && props.invalidDeviceHandler(isValidDevice);
  }, [isValidDevice, props]);

  const webcamStyleConfig = getWebcamStyle();

  if (isValidDevice) {
    return (
      <div
        css={props.isCircular ? styles.container : styles.containerWithBgColor}
      >
        {!hasVideoSource && (
          <div css={webcamStyleConfig.messageStyle}>
            {props.isCircular && (
              // this nested div keeps the svg sized properly,
              // while allowing the parent div to have the
              // dimensions that it needs.
              <div
                css={
                  props.variant === 'sm'
                    ? styles.smallLogoDimensions
                    : styles.largeLogoDimensions
                }
              >
                <ScreencastifyLogoMarkWhite />
              </div>
            )}
          </div>
        )}
        <video
          ref={videoRef}
          id="PiP"
          css={webcamStyleConfig.webCamStyle}
          autoPlay={true}
        />
      </div>
    );
  } else {
    return <InvalidDevice />;
  }
});

export default Webcam;
