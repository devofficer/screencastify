//TODO: Make this include audio

import {
  IBrowserLogger,
  createBrowserLogger,
} from '@castify/studio/observability/browser';

const logger: IBrowserLogger = createBrowserLogger('RecorderHelpers');

export async function getUserMediaByStreamId(
  streamId: string,
  mediaSource: 'desktop' | 'tab',
): Promise<MediaStream> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        mandatory: {
          chromeMediaSource: mediaSource,
          chromeMediaSourceId: streamId,
        },
      } as MediaTrackConstraints,
      audio: {
        mandatory: {
          chromeMediaSource: mediaSource,
          chromeMediaSourceId: streamId,
        },
      } as MediaTrackConstraints,
    });
    //when its a tab stream we need to do more work to capture the background audio

    if (mediaSource === 'tab') {
      const context = new AudioContext();
      // these lines enable the audio to continue playing while capturing
      const newStream = context.createMediaStreamSource(stream);
      newStream.connect(context.destination);

      const audioAndVideoStream = new MediaStream([
        stream.getVideoTracks()[0],
        newStream.mediaStream.getAudioTracks()[0],
      ]);
      return audioAndVideoStream;
    }
    //since we early return for tab recording we can make the default for desktop recording
    //return the stream without modification
    return stream;
  } catch (error) {
    logger.error('Error getting user media stream by ID', { error: error });
    throw error;
  }
}

export async function getUserVideoByDeviceId(
  deviceId: string,
): Promise<MediaStream | undefined> {
  try {
    return await navigator.mediaDevices.getUserMedia({
      video: {
        deviceId: deviceId,
      },
    });
  } catch (error) {
    logger.error('Error getting user video by device ID', { error: error });
    return;
  }
}

export async function getUserAudioByDeviceId(
  deviceId: string,
): Promise<MediaStream | undefined> {
  try {
    return await navigator.mediaDevices.getUserMedia({
      audio: {
        deviceId,
      },
    });
  } catch (error) {
    logger.error('Error getting user audio by device ID', { error: error });
    return;
  }
}

export async function navigateToTab(tabId: string | null) {
  if (!tabId) return;
  const tabs = await chrome.tabs.query({
    currentWindow: true,
  });

  for (const tab of tabs) {
    if (tabId && tab.id === parseInt(tabId)) {
      chrome.tabs.update(parseInt(tabId), {
        active: true,
      });
    }
  }
}
