import { AppExtensionProtocolDefinition } from '@castify/app-extension-messaging';
import { Messages } from '@castify/messaging';
import { environment } from '@castify/record-mv3/environment';

interface BackgroundScriptIngestionSummary {
  recordingId: string;
  projectId: string;
  // Completed when we finished the whole thing
  // otherwise the last seen step
  lastSeenStep: string;

  // how many ms the modals were shown for the whole flow,
  // regardless of completion
  totalModalTimeMs: number;

  // all values below can be undefined, as it's possible for the steps to have
  // not started or for the extension to have never received messages about them starting.
  // this is _likely_ the case even for the first upload step, but it will depend on implementation
  // details. therefore, removing `undefined` might make sense for upload-related values

  // how far along does the user think the upload is?
  lastSeenUploadPercent: number | undefined;

  // for how long did we show the upload progress bar before
  // we finished the upload or the user bailed?
  uploadTimeMs: number | undefined;

  // if the user closed the tab, how much time has passed since the last update we got
  // from the webapp about an upload progress update being displayed to the user?
  // best to leave this as undefined when we didn't get a tab closure during upload
  msSinceLastUploadProgressUpdate: number | undefined;

  // undefined when we didn't get to this step;
  // otherwise how long this modal was shown, completed or otherwise
  requestedImportTimeMs: number | undefined;

  // undefined when we didn't get to this step;
  // otherwise how long this modal was shown, completed or otherwise
  processingTimeMs: number | undefined;

  // this is the extension's understanding of the duration of the recording
  recordingDurationMs: number;
  // size of the file being uploaded
  fileSizeBytes: number;
}
export interface IRollUpDetails {
  UPLOAD_START?: AppExtensionProtocolDefinition['UPLOAD_START']['payload'];
  UPLOAD_PROGRESS_UPDATE?: AppExtensionProtocolDefinition['UPLOAD_PROGRESS_UPDATE']['payload'];
  REQUEST_IMPORT_START?: AppExtensionProtocolDefinition['REQUEST_IMPORT_START']['payload'];
  PROCESSING_START?: AppExtensionProtocolDefinition['PROCESSING_START']['payload'];
  COMPLETED_INGESTION?: AppExtensionProtocolDefinition['COMPLETED_INGESTION']['payload'];
  INGESTION_ERROR?: AppExtensionProtocolDefinition['INGESTION_ERROR']['payload'];
}

export interface IObservabilityStorageResult {
  [key: string]: IRollUpDetails;
}

export interface StudioTabDetails {
  tabId: number;
  handoffId: string;
  recordingId: string;
  projectId?: string;
  createdAt: number;
}

export interface StudioTabsStorageResult {
  studioTabs: { tabs: Array<StudioTabDetails> };
}

export async function createObservabilityStorage(
  handoffId: string,
  intitialEntry: Messages<AppExtensionProtocolDefinition>,
) {
  const dataToSave: IObservabilityStorageResult | undefined = {};
  if (intitialEntry.command === 'UPLOAD_START') {
    dataToSave[handoffId] = {
      UPLOAD_START: intitialEntry.payload,
    };
  }

  await chrome.storage.local.set(dataToSave);
}

export async function addObservabilityMessage(
  handoffId: string,
  entry: Messages<AppExtensionProtocolDefinition>,
) {
  const storageResult = (await chrome.storage.local.get([
    handoffId,
  ])) as IObservabilityStorageResult;

  if (storageResult) {
    switch (entry.command) {
      case 'UPLOAD_START':
        storageResult[handoffId] = {
          ...storageResult[handoffId],
          UPLOAD_START: entry.payload,
        };
        break;
      case 'UPLOAD_PROGRESS_UPDATE':
        storageResult[handoffId] = {
          ...storageResult[handoffId],
          UPLOAD_PROGRESS_UPDATE: entry.payload,
        };
        break;
      case 'REQUEST_IMPORT_START':
        storageResult[handoffId] = {
          ...storageResult[handoffId],
          REQUEST_IMPORT_START: entry.payload,
        };
        break;
      case 'PROCESSING_START':
        storageResult[handoffId] = {
          ...storageResult[handoffId],
          PROCESSING_START: entry.payload,
        };
        break;
      case 'COMPLETED_INGESTION':
        storageResult[handoffId] = {
          ...storageResult[handoffId],
          COMPLETED_INGESTION: entry.payload,
        };
        break;
      case 'INGESTION_ERROR':
        storageResult[handoffId] = {
          ...storageResult[handoffId],
          INGESTION_ERROR: entry.payload,
        };
        break;
      default:
        //unknown command this would be bad
        break;
    }
  }
  await chrome.storage.local.set(storageResult);
}

export async function getStudioTabs() {
  return (await chrome.storage.local.get(
    'studioTabs',
  )) as StudioTabsStorageResult;
}

export async function maybeSaveStudioTabInfo(tabId: number) {
  const tabDetails = await chrome.tabs.get(tabId);
  const extensionIntakeUrl = await environment.getExternalLink(
    'extensionIntake',
  );
  if (tabDetails.pendingUrl?.includes(extensionIntakeUrl)) {
    const urlDetails = new URL(tabDetails.pendingUrl);
    //forcing to string here since we only open this url with these params
    const recordingId = urlDetails.searchParams.get('recordingId') as string;
    const handoffId = urlDetails.searchParams.get('handoffId') as string;

    const studioTabsDetails: StudioTabDetails = {
      handoffId,
      recordingId,
      createdAt: Date.now(),
      tabId,
    };
    const storageResult = (await chrome.storage.local.get([
      'studioTabs',
    ])) as StudioTabsStorageResult;
    if (storageResult.studioTabs) {
      await chrome.storage.local.set({
        studioTabs: {
          tabs: [...storageResult.studioTabs.tabs, studioTabsDetails],
        },
      });
    } else {
      await chrome.storage.local.set({
        studioTabs: { tabs: [studioTabsDetails] },
      });
    }
  }
}

export async function getObservabilityMessagesByHandoffId(handoffId: string) {
  const storageResult = (await chrome.storage.local.get([
    handoffId,
  ])) as IObservabilityStorageResult;
  return storageResult;
}

export async function generateIngestionRollup(
  handoffId: string,
  data: IObservabilityStorageResult,
) {
  if (!data[handoffId]) return;
  //if there wasn't an error and we got completed we expect to have all keys
  if (!data[handoffId].INGESTION_ERROR && data[handoffId].COMPLETED_INGESTION) {
    return generateRollupForSuccess(data[handoffId]);
  } else {
    //some kind of error occured or a user didn't finish the flow
    return generateRollupForFailure(data[handoffId]);
  }
}

export async function cleanUpObservabilityData(handoffId: string) {
  await chrome.storage.local.remove([handoffId]);
  const studioTabsResult = await getStudioTabs();
  if (studioTabsResult.studioTabs && studioTabsResult.studioTabs.tabs) {
    const tabsArray = studioTabsResult.studioTabs.tabs;
    //filter out all instances of a given handoffId and reset the other uploads into storage
    const filterdArray = tabsArray.filter(
      (entry) => entry.handoffId !== handoffId,
    );
    await chrome.storage.local.set({
      studioTabs: {
        tabs: filterdArray,
      },
    });
  }
}

function generateRollupForSuccess(data: IRollUpDetails) {
  if (
    !data.UPLOAD_START ||
    !data.UPLOAD_PROGRESS_UPDATE ||
    !data.REQUEST_IMPORT_START ||
    !data.PROCESSING_START ||
    !data.COMPLETED_INGESTION
  )
    return;

  const recordingId = data.COMPLETED_INGESTION.recordingId;
  const projectId = data.COMPLETED_INGESTION.projectId;
  const startTime = data.UPLOAD_START.timestamp;
  const fileSizeBytes = data.UPLOAD_START.fileSizeBytes;
  const lastSeenStep = 'COMPLETED_INGESTION';
  const totalModalTimeMs = data.COMPLETED_INGESTION.timestamp - startTime;
  const lastSeenUploadPercent = data.UPLOAD_PROGRESS_UPDATE.progressPercent;
  const uploadTimeMs = data.REQUEST_IMPORT_START.timestamp - startTime;
  const requestedImportTimeMs =
    data.PROCESSING_START.timestamp - data.REQUEST_IMPORT_START.timestamp;
  const processingTimeMs =
    data.COMPLETED_INGESTION.timestamp - data.PROCESSING_START.timestamp;
  const summary: BackgroundScriptIngestionSummary = {
    recordingId,
    projectId,
    lastSeenStep,
    totalModalTimeMs,
    msSinceLastUploadProgressUpdate: undefined,
    lastSeenUploadPercent,
    uploadTimeMs,
    requestedImportTimeMs,
    processingTimeMs,
    recordingDurationMs: data.COMPLETED_INGESTION.recordingDurationMs,
    fileSizeBytes,
  };
  return summary;
}
function generateRollupForFailure(data: IRollUpDetails) {
  const keys = Object.keys(
    data,
  ) as Messages<AppExtensionProtocolDefinition>['command'][];
  let startTime = 0;
  let fileSizeBytes = 0;
  const lastSeenStep = keys[0] as
    | 'UPLOAD_START'
    | 'UPLOAD_PROGRESS_UPDATE'
    | 'REQUEST_IMPORT_START'
    | 'PROCESSING_START'
    | 'COMPLETED_INGESTION'
    | 'INGESTION_ERROR';

  let totalModalTimeMs = 0;
  let lastSeenUploadPercent = undefined;
  let uploadTimeMs = undefined;
  let requestedImportTimeMs = undefined;
  let msSinceLastUploadProgressUpdate = undefined;
  if (data.UPLOAD_START) {
    startTime = data.UPLOAD_START.timestamp;
    fileSizeBytes = data.UPLOAD_START.fileSizeBytes;
  }

  if (data[lastSeenStep]) {
    //@ts-expect-error - if the objec thad no keys this could be undefined but it will have keys here
    totalModalTimeMs = data[lastSeenStep].timestamp - startTime;
  }

  if (data.UPLOAD_PROGRESS_UPDATE) {
    lastSeenUploadPercent = data.UPLOAD_PROGRESS_UPDATE.progressPercent;
    msSinceLastUploadProgressUpdate =
      Date.now() - data.UPLOAD_PROGRESS_UPDATE.timestamp;
  }

  if (data.REQUEST_IMPORT_START) {
    uploadTimeMs = data.REQUEST_IMPORT_START.timestamp - startTime;
  }

  if (data.REQUEST_IMPORT_START && data.PROCESSING_START) {
    requestedImportTimeMs =
      data.PROCESSING_START.timestamp - data.REQUEST_IMPORT_START.timestamp;
  }

  // this is assuming we never finished to reach this block
  const processingTimeMs = undefined;
  const summary: BackgroundScriptIngestionSummary = {
    recordingId: data[lastSeenStep]?.recordingId as string,
    projectId: data[lastSeenStep]?.projectId as string,
    lastSeenStep,
    totalModalTimeMs,
    msSinceLastUploadProgressUpdate,
    lastSeenUploadPercent,
    uploadTimeMs,
    requestedImportTimeMs,
    processingTimeMs,
    recordingDurationMs: 0,
    fileSizeBytes,
  };
  return summary;
}
