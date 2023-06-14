import { IRecording } from '@castify/record-mv3/record-components';
import { reaction } from 'mobx';
import { useEffect } from 'react';

export const useInjectionCleanup = (
  recording: IRecording,
  setInjectableTabId: (tabId: number | null) => void,
) => {
  useEffect(() => {
    return reaction(
      () => recording.state,
      () => {
        if (recording.state === 'stopped') {
          setInjectableTabId(null);
        }
      },
    );
  }, [recording.state, setInjectableTabId]);
};
