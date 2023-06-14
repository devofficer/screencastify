import { environment } from '@castify/record-mv3/environment';
import { setExtensionIcon } from '@castify/record-mv3/chrome-actions';
import { ServiceWorkerLogger } from '@castify/record-mv3/observability/service-worker';
import { AppExtensionProtocolDefinition } from '@castify/app-extension-messaging';
import { getRecordingMetaDataById } from '@castify/record-mv3/recording-indexed-db';
import {
  addObservabilityMessage,
  cleanUpObservabilityData,
  createObservabilityStorage,
  generateIngestionRollup,
  getObservabilityMessagesByHandoffId,
  getStudioTabs,
  maybeSaveStudioTabInfo,
} from './ingestion-summary';
import { createServiceWorkerProtocolHandler } from './service-worker-protocol-handler';

const DD_TAGS = `sdk_version:4.4.0,env:${environment.dataDogEnv}`;
const DD_SERVICE_NAME = 'record-mv3-background-worker';
const logger = new ServiceWorkerLogger(DD_TAGS, DD_SERVICE_NAME);

interface IInstalledDetails {
  id?: string;
  previousVersion?: string;
  reason: 'install' | 'update' | 'chrome_update' | 'shared_module_update';
}

interface ControllerIdStorageResult {
  controllerTabId: number;
  applicationTabId: number;
}

interface RecorderStatusStorageResult {
  recorderStatus: string;
}

/**
 * A sensitive recording state is a state in which stopping a recording forcefully can cause bugs in the system
 * @param recorderStatus
 * @returns boolean
 */
const isSensitiveRecordingState = (recorderStatus: string) => {
  return (
    recorderStatus === 'recording' ||
    recorderStatus === 'paused' ||
    recorderStatus === 'stopped'
  );
};

const onInstalled = async () => {
  const redirectLink = await environment.getExternalLink(
    'installationRedirect',
  );
  logger.info(`successful first install redirecting to ${redirectLink}`);
  chrome.tabs.create({ url: redirectLink });
};

chrome.runtime.onInstalled.addListener(async (details: IInstalledDetails) => {
  //always set this url so it will be valid for all users regardless of update reason
  const uninstallUrl = await environment.getExternalLink('uninstallUrl');
  chrome.runtime.setUninstallURL(uninstallUrl);
  if (details.reason === 'install') {
    onInstalled();
  }
});

chrome.tabs.onCreated.addListener(async (tab) => {
  if (tab.pendingUrl?.includes('controller.html')) {
    await chrome.storage.local.set({ controllerTabId: tab.id });
    logger.info(`Created controller tab with id ${tab.id}`);
  } else {
    maybeSaveStudioTabInfo(tab.id as number);
  }
});

/**
 * this will handle closing of the controller tab and studio tabs currently in the middle of an upload
 */
chrome.tabs.onRemoved.addListener(async (tabId) => {
  const storageResult = (await chrome.storage.local.get([
    'controllerTabId',
  ])) as unknown as ControllerIdStorageResult;
  if (tabId === storageResult.controllerTabId) {
    const { recorderStatus } = (await chrome.storage.local.get([
      'recorderStatus',
    ])) as unknown as RecorderStatusStorageResult;

    //if we close during one of these states force status to error so we teardown injection properly
    //Teardown in Extension.tsx removes the recorderStatus key so this is the extent of clean up we need to do
    if (isSensitiveRecordingState(recorderStatus)) {
      await chrome.storage.local.set({ recorderStatus: 'error' });
      setExtensionIcon('error');

      logger.info(`Controller Tab forcefully closed during recording`, {
        recorderStatus,
      });
    }
  } else {
    const tabRecordsFromStorage = await getStudioTabs();
    if (tabRecordsFromStorage.studioTabs) {
      const { tabs } = tabRecordsFromStorage.studioTabs;

      const tabFound = tabs.find((entry) => {
        return entry.tabId === tabId;
      });

      if (tabFound) {
        const data = await getObservabilityMessagesByHandoffId(
          tabFound.handoffId,
        );
        //did we find observability data for the given handoff id
        if (data && data[tabFound.handoffId]) {
          try {
            const summary = await generateIngestionRollup(
              tabFound.handoffId,
              data,
            );
            logger.info('Ingestion summary early closure', summary);
          } catch (error) {
            logger.error('Error occured while rolling up data', error);
          }

          //clean up will remove the observability data and tab tracking data
          cleanUpObservabilityData(tabFound.handoffId);
        }
      }
    }
  }
});

/**
 * this will handle reloading of the controller tab
 */
chrome.tabs.onUpdated.addListener(async (tabId) => {
  const storageResult = (await chrome.storage.local.get([
    'controllerTabId',
  ])) as unknown as ControllerIdStorageResult;
  if (tabId === storageResult.controllerTabId) {
    const { recorderStatus } = (await chrome.storage.local.get([
      'recorderStatus',
    ])) as unknown as RecorderStatusStorageResult;

    // if we reload during one of these states force status to error so we teardown injection properly
    // teardown in Extension.tsx removes the recorderStatus key so this is the extent of clean up we need to do
    if (isSensitiveRecordingState(recorderStatus)) {
      await chrome.storage.local.set({ recorderStatus: 'error' });
      await chrome.storage.local.remove('recordingInProgress');
      setExtensionIcon('error');
      logger.info(`Controller Tab forcefully reloaded during recording`, {
        recorderStatus,
      });
    }
  }
});

const protocolHandler =
  createServiceWorkerProtocolHandler<AppExtensionProtocolDefinition>(
    {
      CFY_APPSIGNIN: async (message) => {
        if (message.payload.token) {
          const { token } = message.payload;
          await chrome.storage.local.set({ token });
          logger.info('User signed into app refreshing token in storage');
        }
      },
      CFY_APPSIGNOUT: async () => {
        chrome.storage.local.remove(['token', 'userState']);
        logger.info('User Signed out of App, removing token from storage');
      },
      UPLOAD_START: async (message) => {
        logger.info('Recieved upload start message', message);
        const { handoffId } = message.payload;
        await createObservabilityStorage(handoffId, message);
      },
      UPLOAD_PROGRESS_UPDATE: async (message) => {
        logger.info('Recieved upload progress update', message);
        const { handoffId } = message.payload;
        await addObservabilityMessage(handoffId, message);
      },
      REQUEST_IMPORT_START: async (message) => {
        logger.info('Recieved request import start message', message);
        const { handoffId } = message.payload;
        await addObservabilityMessage(handoffId, message);
      },
      PROCESSING_START: async (message) => {
        logger.info('Recieved processing start message', message);
        const { handoffId } = message.payload;
        await addObservabilityMessage(handoffId, message);
      },
      COMPLETED_INGESTION: async (message) => {
        logger.info('Recieved completed ingestion message', message);
        const recordingMetaData = await getRecordingMetaDataById(
          message.payload.recordingId,
        );
        //enrich the message to include the recording duration
        if (recordingMetaData) {
          message.payload.recordingDurationMs =
            recordingMetaData?.predictedDuration;
        }
        const { handoffId } = message.payload;
        await addObservabilityMessage(handoffId, message);
        const data = await getObservabilityMessagesByHandoffId(handoffId);
        try {
          const summary = await generateIngestionRollup(handoffId, data);
          logger.info('Ingestion summary', summary);
        } catch (error) {
          logger.error('Error occured while rolling up data', error);
        }

        cleanUpObservabilityData(handoffId);
      },
      INGESTION_ERROR: async (message) => {
        logger.info('Recieved ingestion error message', message);
        const { handoffId } = message.payload;
        await addObservabilityMessage(handoffId, message);
        const data = await getObservabilityMessagesByHandoffId(handoffId);
        try {
          const summary = await generateIngestionRollup(handoffId, data);
          logger.info('Ingestion summary with error', summary);
        } catch (error) {
          logger.error('Error occured while rolling up data', error);
        }
      },
    },
    logger,
  );
logger.info('setting up protocol handler listener');
chrome.runtime.onMessageExternal.addListener(protocolHandler);

/**
 * External messages should arrive in the form { type, payload }
 */
logger.info('Adding external messaging');
chrome.runtime.onMessageExternal.addListener(
  async (message, sender, sendResponse) => {
    logger.info('received external message', message.type);
    if (!originIsAllowed(sender.origin || '')) {
      logger.warn(`received message from unexpected origin: ${sender.origin}`);
      return;
    }

    if (message.type === 'extensionAuth:signInWithToken') {
      const { payload } = message;
      logger.info('setting token value');
      chrome.storage.local.set({
        token: payload.idToken,
        firebase: payload.firebaseToken,
        googleAccessToken: payload.googleAccessToken,
      });
    }
    if (message.type === 'extensionAuth:signout') {
      logger.info('App message to sign out of extension received');
      chrome.storage.local.remove(['token', 'firebase', 'googleAccessToken']);
    }

    sendResponse(true);
  },
);

const originIsAllowed = async (origin: string) =>
  Object.values(await environment.getAllOrigins()).includes(origin);
