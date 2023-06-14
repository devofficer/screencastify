import { useState, useEffect } from 'react';
import { IRecording } from '@castify/record-mv3/record-components';
import { ScriptInjectionController } from '../../content-scripts/util/ScriptInjectionController';

export function useInjectableTab(_recording: IRecording) {
  const [injectableTabId, unsafeSetInjectableTabId] = useState<number | null>(
    null,
  );

  // Guards against trying to inject into the current tab, which
  // will cause an error. If other constraints arise for the tabId,
  // this would be the place to enforce them.
  const setInjectableTabId = (tabId: number | null) => {
    const safeTabId = tabId === currentTabId ? null : tabId;
    unsafeSetInjectableTabId(safeTabId);
  };

  const [currentTabId, setCurrentTabId] = useState<number | null>(null);

  useEffect(() => {
    chrome.tabs.getCurrent((tab) => setCurrentTabId(tab?.id as number));
  }, []);

  //For all recordings set up injection if we have a injectable tab id and the state is recording
  useEffect(() => {
    if (!injectableTabId) return;

    const injectionController = new ScriptInjectionController(
      injectableTabId,
      'base-dom-injection.js',
    );
    injectionController?.setup();

    return () => {
      injectionController.teardown();
    };
  }, [injectableTabId]);

  return {
    injectableTabId,
    currentTabId,
    setInjectableTabId,
  };
}
