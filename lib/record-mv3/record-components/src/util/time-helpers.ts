/**
 * Helper to convert milliseconds to HMS. Millisecond remainder is discarded
 * Format HMS for display. If H and M and S are not int, discards their
 * fractional component.
 *
 * Returns `mm:ss` if less than an hour; otherwise `hh:mm:ss`. If `h` is
 * only one digit, it does not get padded to 2; by contrast, `m` and `s`
 * are always padded.
 */

export const getHMSTimestampFromMS = (ms: number) => {
  let s = ms / 1000;
  const h = Math.floor(s / 3600);
  s = s % 3600;
  const m = Math.floor(s / 60);
  s = s % 60;
  const hms = { h, m, s };
  const hours = hms.h ? hms.h.toFixed(0) : '';
  const minutes = hms.m.toFixed(0).padStart(2, '0');
  const seconds = hms.s.toFixed(0).padStart(2, '0');
  const minutesSeconds = `${minutes}:${seconds}`;
  return hours ? hours + ':' + minutesSeconds : minutesSeconds;
};
