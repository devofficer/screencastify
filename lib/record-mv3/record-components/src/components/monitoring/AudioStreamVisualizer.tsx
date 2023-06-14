import { colors } from '@castify/fe-common';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef, useState } from 'react';
import { useRaf } from 'rooks';
import { useControllerState } from '../../state/ControllerStateProvider';
import { getUserAudioByDeviceId } from '../../util/recorder-helpers';
import { InvalidDevice } from '../errors/InvalidDevice';

interface IAudioVisualizerProps {
  invalidDeviceHandler?: (isValid: boolean) => void;
}

const canvasWidth = 70;
const canvasHeight = 50;

const drawTimeDataToCanvas = (
  timeData: Uint8Array,
  ctx2D: CanvasRenderingContext2D,
  bufferLength: number,
) => {
  ctx2D.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx2D.lineWidth = 1;
  ctx2D.strokeStyle = colors.secondary;
  ctx2D.beginPath();
  const sliceWidth = canvasWidth / bufferLength;

  let x = 0;

  for (let i = 0; i < bufferLength; i++) {
    const v = timeData[i] / 128.0;
    const y = (v * canvasHeight) / 2;

    if (i === 0) {
      ctx2D.moveTo(x, y);
    } else {
      ctx2D.lineTo(x, y);
    }

    x += sliceWidth;
  }

  ctx2D.lineTo(canvasWidth, canvasHeight / 2);
  ctx2D.stroke();
};

const logger = createBrowserLogger('AudioStreamVisualizer');

export const AudioStreamVisualizer = observer(
  (props: IAudioVisualizerProps) => {
    const [isValidDevice, setIsValidDevice] = useState(true);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { recordingSettings } = useControllerState();

    const analyzerRef = useRef<AnalyserNode | null>(null);
    const timeDataRef = useRef<Uint8Array | null>(null);

    useRaf(() => {
      const analyzer = analyzerRef.current;
      const timeData = timeDataRef.current;
      const canvas = canvasRef.current;
      const ctx2d = canvasRef && canvas && canvas.getContext('2d');

      if (!analyzer || !timeData || !ctx2d) {
        return;
      }

      analyzer.getByteTimeDomainData(timeData);
      const bufferLength = analyzer.frequencyBinCount;
      drawTimeDataToCanvas(timeData, ctx2d, bufferLength);
    }, !!recordingSettings.selectedAudioDeviceId);

    useEffect(() => {
      const deviceId = recordingSettings.selectedAudioDeviceId || '';
      if (!deviceId) {
        analyzerRef.current = null;
      }
      const getAnalyzer = async (
        deviceId: string,
      ): Promise<AnalyserNode | null> => {
        setIsValidDevice(true);
        // access the user's mic
        const audioStream = await getUserAudioByDeviceId(deviceId);

        if (!audioStream) {
          setIsValidDevice(false);
          return null;
        }

        logger.info('Successfully got audio stream');

        // get the audio context in the browser where all of the processing will be done
        const audioCtx = new AudioContext();

        // create the analyzer
        const analyzer = audioCtx.createAnalyser();

        // create a source which takes the stream and pipes it into the audio context -
        // then connect that source to the analyzer
        const source = audioCtx.createMediaStreamSource(audioStream);
        source.connect(analyzer);

        return analyzer;
      };

      getAnalyzer(deviceId).then((analyzer) => {
        analyzerRef.current = analyzer;
        if (analyzer) {
          timeDataRef.current = new Uint8Array(analyzer.frequencyBinCount);
        }
      });
    }, [recordingSettings.selectedAudioDeviceId]);

    useEffect(() => {
      props.invalidDeviceHandler && props.invalidDeviceHandler(isValidDevice);
    }, [isValidDevice, props]);

    if (isValidDevice) {
      return (
        <>
          <p style={{ display: 'none' }}>
            Device ID: {recordingSettings.selectedAudioDeviceId}
          </p>
          <canvas
            width={canvasWidth}
            height={canvasHeight}
            ref={canvasRef}
          ></canvas>
        </>
      );
    } else {
      return <InvalidDevice />;
    }
  },
);
