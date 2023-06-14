import { getAnonymousUserIdentifierAsync } from '@castify/fe-common';
import { environment } from '@castify/record-mv3/environment';
import {
  ControllerStorageDriver,
  IRecording,
  useSyncedControllerState,
} from '@castify/record-mv3/record-components';
import { deleteAllRecordingDataById } from '@castify/record-mv3/recording-indexed-db';
import {
  createBrowserLogger,
  IBrowserLogger,
} from '@castify/studio/observability/browser';
import { observer } from 'mobx-react-lite';
import { nanoid } from 'nanoid';
import fixWebmDuration from 'webm-duration-fix';
import { DesktopController } from './DesktopController';
import { useTeardownWithInitializer } from './hooks/useTeardownWithInitializer';
import { TabController } from './TabController';
import { createVideoNameWithTimestamp } from './util/VideoNaming';
import { WebcamController } from './WebcamController';

export const Controller = observer(() => {
  const { recordingSettings, recordingInProgress } = useSyncedControllerState();

  const teardownController = async () => {
    await deleteAllRecordingDataById(recordingInProgress.recordingId);
    await ControllerStorageDriver.resetRecordingInProgress();
    //resetting recorder status will force this to close due to the teardown with initializer hook below
    await ControllerStorageDriver.resetRecorderStatus();
    window.close();
  };
  const logger: IBrowserLogger = createBrowserLogger('Controller');

  logger.debug(`Recording Type: ${recordingSettings.recordingType}`);

  useTeardownWithInitializer();

  const createOnComplete = (recording: IRecording, title?: string) => {
    if (!title) {
      title = createVideoNameWithTimestamp();
    }

    const onComplete = async (fullBlob: Blob) => {
      const handoffId = nanoid();
      const intakeOrigin = await environment.getOrigin('intake');
      const extensionIntakeUrl = await environment.getExternalLink(
        'extensionIntake',
      );
      const destination = window.open(
        `${extensionIntakeUrl}&recordingId=${recordingInProgress.recordingId}&handoffId=${handoffId}`,
        '_blank',
      );
      logger.info('recording completed');
      window.pendo.track('recording-complete');
      if (destination) {
        window.addEventListener('message', async (event) => {
          if (event.data === 'ready' && event.origin === intakeOrigin) {
            logger.info('attempting to upload recording', {
              recordingId: recordingInProgress.recordingId,
            });
            const startTimeMs = performance.now();
            const fixedBlob = await fixWebmDuration(fullBlob);
            const buffer = await fixedBlob.arrayBuffer();
            logger.info(`completed converting blob to arrayBuffer`, {
              durationMs: (performance.now() - startTimeMs).toFixed(2),
              bufferByteLength: buffer.byteLength,
              recordingId: recordingInProgress.recordingId,
            });
            const extSessionUserId = await getAnonymousUserIdentifierAsync();
            destination.postMessage(
              {
                recordingData: fixedBlob,
                recordingId: recordingInProgress.recordingId,
                // send this value to web app for correlation
                extSessionUserId,
                title,
              },
              intakeOrigin,
              [buffer],
            );
          }
          if (event.data === 'complete' && event.origin === intakeOrigin) {
            logger.info('upload successfully completed', {
              recordingId: recordingInProgress.recordingId,
            });
            recording.setHasUploaded(true);
            await teardownController();
          }
        });
      }
    };
    return onComplete;
  };

  const TypeSpecificController =
    recordingSettings.recordingType === 'tab'
      ? TabController
      : recordingSettings.recordingType === 'desktop'
      ? DesktopController
      : recordingSettings.recordingType === 'camera'
      ? WebcamController
      : () => null;

  return (
    <TypeSpecificController
      recordingSettings={recordingSettings}
      createOnComplete={createOnComplete}
    />
  );
});
