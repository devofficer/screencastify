import { IRecordingSettings } from '../../../state/recordingSettings.mst';
import { DesktopRecordingManagerStrategy } from './DesktopRecordingManagerStrategy';
import { RecordingManager } from './RecordingManager';
import { TabRecordingManagerStrategy } from './TabRecordingManagerStrategy';
import { WebcamRecordingManagerStrategy } from './WebcamRecordingManagerStrategy';

export function getRecordingManager(
  recordingSettings: IRecordingSettings,
  recordingId: string,
) {
  let strategy;
  switch (recordingSettings.recordingType) {
    case 'tab': {
      strategy = new TabRecordingManagerStrategy(
        recordingSettings,
        recordingId,
      );
      break;
    }
    case 'desktop': {
      strategy = new DesktopRecordingManagerStrategy(
        recordingSettings,
        recordingId,
      );
      break;
    }
    case 'camera': {
      strategy = new WebcamRecordingManagerStrategy(
        recordingSettings,
        recordingId,
      );
      break;
    }
  }
  return new RecordingManager(recordingSettings, recordingId, strategy);
}
