import {
  RecordingData,
  recordingIndexedDb,
  RecordingMetaData,
} from './recording-indexed-db';

export const addMetaData = async (recordingMetaData: RecordingMetaData) => {
  await recordingIndexedDb.recordingMetaData.add(recordingMetaData);
};

export const addRecordingData = async (recordingData: RecordingData) => {
  recordingIndexedDb.recordingData.add(recordingData);
};
export const updateMetaData: (
  recordingMetaData: RecordingMetaData,
) => Promise<void> = async (recordingMetaData: RecordingMetaData) => {
  await recordingIndexedDb.recordingMetaData.put(recordingMetaData);
};

export const getUnuploadedRecordings = async () => {
  const data = await recordingIndexedDb.recordingMetaData
    .toArray()
    .then((result) =>
      result.filter((metaData) => metaData.uploadStatus !== 'completed'),
    );
  return data;
};

export const getRecordingMetaDataById = async (recordingId: string) => {
  const data = await recordingIndexedDb.recordingMetaData
    .where('recordingId')
    .equals(recordingId)
    .first();
  return data;
};

export const getSortedRecordingSegments = async (recordingId: string) => {
  const data = await recordingIndexedDb.recordingData
    .where('recordingId')
    .equals(recordingId)
    .sortBy('sequenceNumber');
  return data;
};

export const deleteAllRecordingDataById = async (recordingId: string) => {
  await recordingIndexedDb.recordingMetaData
    .where('recordingId')
    .equals(recordingId)
    .delete();
  await recordingIndexedDb.recordingData
    .where('recordingId')
    .equals(recordingId)
    .delete();
};

export const deleteRecordingDataById = async (recordingId: string) => {
  await recordingIndexedDb.recordingData
    .where('recordingId')
    .equals(recordingId)
    .delete();
};

export const deleteRecordingMetaDataById = async (recordingId: string) => {
  await recordingIndexedDb.recordingMetaData
    .where('recordingId')
    .equals(recordingId)
    .delete();
};
