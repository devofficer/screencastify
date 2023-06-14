import { RecordingManagerStrategy, TabIds } from './RecordingManager';
import {
  getUserMediaByStreamId,
  getUserAudioByDeviceId,
  navigateToTab,
} from '../../../util/recorder-helpers';
import { createBrowserLogger } from '@castify/studio/observability/browser';
import { IRecordingSettings } from '../../../state/recordingSettings.mst';

export class DesktopRecordingManagerStrategy
  implements RecordingManagerStrategy
{
  constructor(
    private recordingSettings: IRecordingSettings,
    private recordingId: string,
  ) {}
  private logger = createBrowserLogger('DesktopRecordingManagerStrategy');

  async getMediaStreamId(): Promise<string | null> {
    this.logger.info('Getting media stream ID', {
      applicationState: {
        recordingId: this.recordingId,
      },
    });
    return new Promise((resolve) => {
      chrome.desktopCapture.chooseDesktopMedia(
        ['screen', 'window', 'audio'],
        (streamId) => {
          if (streamId) {
            resolve(streamId);
          } else {
            resolve(null);
          }
        },
      );
    });
  }
  async getCombinedMediaStream(streamId: string) {
    this.logger.info('Getting combined media stream', {
      applicationState: {
        recordingId: this.recordingId,
      },
    });
    //if this fails it will throw an exception up the stack
    const desktopStream = await getUserMediaByStreamId(streamId, 'desktop');

    this.logger.info('Desktop stream tracks', {
      desktopStreamTracks: desktopStream.getTracks(),
      applicationState: {
        recordingId: this.recordingId,
      },
    });

    const streams = [desktopStream.getVideoTracks()[0]];

    //check if the user wants to include microphone in recording
    if (this.recordingSettings.useAudioDevice) {
      const micAudioStream = await getUserAudioByDeviceId(
        this.recordingSettings.selectedAudioDeviceId as string,
      );

      //create audio context
      const audioContext = new AudioContext();
      //create a destination stream to merge system and mic audio if needed
      const dest = audioContext.createMediaStreamDestination();
      if (micAudioStream) {
        //fetch the microphone audio node from the mic audio stream
        const micAudioSourceNode =
          audioContext.createMediaStreamSource(micAudioStream);
        //connect the audio node to the desination stream
        micAudioSourceNode.connect(dest);
      }

      //if the user selected include system audio in desktop media selection prompt this will be true
      if (desktopStream.getAudioTracks().length > 0) {
        //fetch the system audio node from the desktopStream
        const desktopAudioSourceNode =
          audioContext.createMediaStreamSource(desktopStream);
        //connect the audio node to the desination stream
        desktopAudioSourceNode.connect(dest);
      }

      //if both streams above were connected this will be a merged stream of both system and mic audio
      const mergedAudioTracks = dest.stream;
      streams.push(mergedAudioTracks.getAudioTracks()[0]);
    } else if (desktopStream.getAudioTracks().length > 0) {
      //in cases the user doesn't want to include their mic we should still check if they want system audio
      streams.push(desktopStream.getAudioTracks()[0]);
    }

    const mergedStream = new MediaStream(streams);
    this.logger.info('Merged stream tracks', {
      mergedStream: mergedStream.getTracks(),
      applicationState: {
        recordingId: this.recordingId,
      },
    });
    streams.forEach((stream) => {
      stream.addEventListener('ended', () => {
        const event = new Event('track ended');
        mergedStream.dispatchEvent(event);
      });
    });
    return mergedStream;
  }

  async navigateToConsumingTab(tabIds: TabIds) {
    return navigateToTab(String(tabIds.controllerTabId));
  }
}
