/**
 * Helper to make default video titles.
 * @param prefix what to put before the timestamp, defaults to `Untitled Video`
 * @returns a default video title with a timestamp
 */
export const createVideoNameWithTimestamp = (
  prefix = 'Untitled Video',
): string => {
  const recordingCompleteTime = new Date();
  const date = recordingCompleteTime.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const time = recordingCompleteTime.toLocaleTimeString('en-US', {
    timeStyle: 'short',
  });

  return `${prefix} ${date} ${time}`;
};
