import { RecordingManagerStrategy, TabIds } from './RecordingManager';
import {
  getUserMediaByStreamId,
  getUserAudioByDeviceId,
  navigateToTab,
} from '../../../util/recorder-helpers';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { IRecordingSettings } from '../../../state/recordingSettings.mst';

export class TabRecordingManagerStrategy implements RecordingManagerStrategy {
  constructor(
    private recordingSettings: IRecordingSettings,
    private recordingId: string,
  ) {}
  private logger = createBrowserLogger('TabRecordingManagerStrategy');

  async getMediaStreamId(tabIds: TabIds): Promise<string> {
    this.logger.info('Getting media stream ID', {
      applicationState: {
        recordingId: this.recordingId,
      },
    });
    return new Promise((resolve, reject) => {
      chrome.tabCapture.getMediaStreamId(
        {
          targetTabId: tabIds.activeTabId,
          consumerTabId: tabIds.controllerTabId,
        },
        (streamId) => {
          if (streamId) {
            resolve(streamId);
          } else {
            const err = new Error('could not get tab stream ID');
            this.logger.error(err.message, {
              applicationState: {
                recordingId: this.recordingId,
              },
              error: err,
            });
            reject(err);
          }
        },
      );
    });
  }

  async getCombinedMediaStream(streamId: string): Promise<MediaStream> {
    this.logger.info('Getting combined media stream', {
      applicationState: {
        recordingId: this.recordingId,
      },
    });
    const recordingSettings = this.recordingSettings;
    //if this fails it will throw error up stack to error boundary
    const tabStream = await getUserMediaByStreamId(streamId, 'tab');
    const streams = [tabStream.getVideoTracks()[0]];

    if (recordingSettings.useAudioDevice) {
      const micAudioStream = await getUserAudioByDeviceId(
        recordingSettings.selectedAudioDeviceId as string,
      );

      const audioContext = new AudioContext();
      const dest = audioContext.createMediaStreamDestination();
      if (micAudioStream) {
        const micAudioSourceNode =
          audioContext.createMediaStreamSource(micAudioStream);
        micAudioSourceNode.connect(dest);
      }

      if (recordingSettings.useTabAudio) {
        const tabAudioSourceNode =
          audioContext.createMediaStreamSource(tabStream);

        tabAudioSourceNode.connect(dest);
      }

      const mergedAudioTracks = dest.stream;
      streams.push(mergedAudioTracks.getAudioTracks()[0]);
    } else if (recordingSettings.useTabAudio) {
      streams.push(tabStream.getAudioTracks()[0]);
    }
    const mergedStream = new MediaStream(streams);
    streams.forEach((stream) => {
      stream.addEventListener('ended', () => {
        const event = new Event('track ended');
        mergedStream.dispatchEvent(event);
      });
    });
    return mergedStream;
  }

  async navigateToConsumingTab(tabIds: TabIds) {
    navigateToTab(String(tabIds.activeTabId));
  }
}
