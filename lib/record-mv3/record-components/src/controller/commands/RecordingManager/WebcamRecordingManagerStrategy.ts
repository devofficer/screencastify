import { RecordingManagerStrategy, TabIds } from './RecordingManager';
import {
  getUserAudioByDeviceId,
  navigateToTab,
  getUserVideoByDeviceId,
} from '../../../util/recorder-helpers';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { IRecordingSettings } from '../../../state/recordingSettings.mst';

export class WebcamRecordingManagerStrategy
  implements RecordingManagerStrategy
{
  constructor(
    private recordingSettings: IRecordingSettings,
    private recordingId: string,
  ) {}
  private logger = createBrowserLogger('WebcamRecordingManagerStrategy');

  private async getWebcamStream(): Promise<MediaStream> {
    this.logger.info('Getting webcam stream', {
      applicationState: {
        recordingId: this.recordingId,
      },
    });
    const deviceId = this.recordingSettings.selectedVideoDeviceId as string;
    const stream = await getUserVideoByDeviceId(deviceId);
    if (!stream) {
      this.logger.error(`could not get stream for device ID ${deviceId}`, {
        applicationState: {
          recordingId: this.recordingId,
          deviceId: deviceId,
        },
      });
      throw new Error(`could not get stream for device ID ${deviceId}`);
    }
    return stream;
  }

  async getMediaStreamId(_tabIds: TabIds): Promise<string> {
    const stream = await this.getWebcamStream();
    return stream.id;
  }

  // streamId is part of the base recording manager interface
  async getCombinedMediaStream(_streamId: string): Promise<MediaStream> {
    this.logger.info('Getting combined media stream');
    const webcamStream = await this.getWebcamStream();
    const streams = [webcamStream.getVideoTracks()[0]];

    if (this.recordingSettings.useAudioDevice) {
      const micAudioStream = await getUserAudioByDeviceId(
        this.recordingSettings.selectedAudioDeviceId as string,
      );
      if (micAudioStream) streams.push(micAudioStream?.getAudioTracks()[0]);
    }
    return new MediaStream(streams);
  }

  async navigateToConsumingTab(tabIds: TabIds) {
    return navigateToTab(String(tabIds.controllerTabId));
  }
}
