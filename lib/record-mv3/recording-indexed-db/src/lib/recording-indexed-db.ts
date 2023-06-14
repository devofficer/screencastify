import Dexie, { Table } from 'dexie';

export interface RecordingMetaData {
  recordingId: string;
  predictedDuration: number;
  uploadStatus: 'not-started' | 'in-progress' | 'completed';
}

export interface RecordingData {
  id?: number;
  segmentId: number;
  recordingId: string;
  data: Blob;
}

export class RecordingIndexedDb extends Dexie {
  // 'recordingMetaData and recordingData' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  recordingMetaData!: Table<RecordingMetaData>;
  recordingData!: Table<RecordingData>;

  constructor() {
    super('screencastify-recording-data');
    this.version(2).stores({
      recordingMetaData: 'recordingId, perdictedDuration, uploadStatus',
      recordingData: '++id, segmentId, recordingId, data',
    });
  }
}

export const recordingIndexedDb = new RecordingIndexedDb();
