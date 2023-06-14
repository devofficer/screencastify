import { createBrowserLogger } from '@castify/studio/observability/browser';
import { IRecording } from '../../../state/recording.mst';
import { IRecordingSettings } from '../../../state/recordingSettings.mst';
import { navigateToTab } from '../../../util/recorder-helpers';
import { ControllerStorageDriver } from '../../storage/ControllerStorageDriver';

export interface TabIds {
  activeTabId: number;
  controllerTabId: number;
}

export interface RecordingManagerStrategy {
  getMediaStreamId: (tabIds: TabIds) => Promise<string | null>;
  getCombinedMediaStream: (streamId: string) => Promise<MediaStream>;
  navigateToConsumingTab: (tabIds: TabIds) => Promise<void>;
}

export class RecordingManager {
  constructor(
    private recordingSettings: IRecordingSettings,
    private recordingId: string,
    private strategy: RecordingManagerStrategy,
  ) {}

  private logger = createBrowserLogger('RecordingManager');

  get type() {
    return this.recordingSettings.recordingType;
  }

  async startRecording(
    recording: IRecording,
    tabIds: TabIds,
    onComplete: (fullBlob: Blob) => void,
    onDeleted: () => void,
    shouldCountIn: boolean,
    tabWasManuallyChanged?: boolean,
  ): Promise<MediaStream | undefined> {
    if (!tabWasManuallyChanged) {
      await this.navigateToConsumingTab(tabIds);
    }

    const streamId = await this.getMediaStreamId(tabIds);
    if (streamId === null) {
      navigateToTab(String(tabIds.activeTabId));
      window.close();
      return;
    }

    //forcefully using as string here because we should have broken execution on above condition if null
    const combinedStream = await this.getCombinedMediaStream(
      streamId as string,
    );

    // custom events emitted from desktop streams. Stops recording
    // if the user stops sharing their screen
    combinedStream.addEventListener('track ended', () => {
      this.stopRecording(recording);
    });

    recording.setMediaStream(combinedStream);
    recording.createMediaRecorder(onComplete, onDeleted);

    // TODO: If we creat a user toggle to switch the countIn on and off
    //        we can gate this `recording.countIn` call with this conditional:
    //        if (this.recordingSettings.useCountIn) {
    this.logger.info(`About to start ${this.type} recording`, {
      applicationState: {
        recordingType: this.type,
        recordingId: this.recordingId,
      },
    });
    if (this.type === 'desktop') {
      navigateToTab(String(tabIds.activeTabId));
    }
    if (shouldCountIn)
      await recording.countIn(this.recordingSettings.countInDuration);
    recording.start();
    return combinedStream;
  }

  stopRecording(recording: IRecording) {
    this.logger.info('stopping recording', {
      applicationState: {
        recordingType: this.type,
        recordingId: this.recordingId,
      },
    });
    recording.stop();
    recording.mediaRecorder.stop();
  }

  pauseRecording(recording: IRecording) {
    this.logger.info('pausing recording', {
      applicationState: {
        recordingType: this.type,
        recordingId: this.recordingId,
      },
    });
    recording.pause();
  }

  resumeRecording(recording: IRecording) {
    this.logger.info('resuming recording', {
      applicationState: {
        recordingType: this.type,
        recordingId: this.recordingId,
      },
    });
    recording.resume();
  }

  deleteRecording(recording: IRecording) {
    this.logger.info('deleting recording', {
      applicationState: {
        recordingType: this.type,
        recordingId: this.recordingId,
      },
    });
    recording.delete();
  }

  async restartRecording(recording: IRecording, shouldCountIn: boolean) {
    recording.restart();
    //since restart resets the state of the recording to initalized it skips the acquiring media phase of our state machine
    //this line kicks it back into that state so our controller tab won't close before it can actually restart
    ControllerStorageDriver.setRecorderStatus('acquiring-media');
    if (shouldCountIn) {
      await recording.countIn(this.recordingSettings.countInDuration);
      recording.start();
    } else {
      recording.start();
    }
  }

  getMediaStreamId(tabIds: TabIds) {
    return this.strategy.getMediaStreamId(tabIds);
  }

  getCombinedMediaStream(streamId: string) {
    return this.strategy.getCombinedMediaStream(streamId);
  }

  navigateToConsumingTab(tabIds: TabIds) {
    return this.strategy.navigateToConsumingTab(tabIds);
  }
}
