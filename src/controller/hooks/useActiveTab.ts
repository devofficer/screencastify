/**
 * This hook wraps some very unintuitive behavior for the chrome
 * tabs/windows apis when trying
 */

import { useState, useEffect } from 'react';
import { findActiveTab } from '@castify/record-mv3/record-components';
import { IRecording } from '@castify/record-mv3/record-components';

type TabId = number | null;

export function useActiveTab(
  cb: (tabId: TabId) => void,
  recording: IRecording,
) {
  //last known injection page for desktop
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  //Only when recording in desktop mode should we set the active tab id
  useEffect(() => {
    const onActivated = async () => {
      if (!recording.isRecordingInProgress) return;
      const tab = await findActiveTab();
      const tabId = tab?.id || null;
      setActiveTabId(tabId);
      cb(tabId);
    };
    chrome.tabs.onActivated.addListener(onActivated);
    chrome.windows.onFocusChanged.addListener(onActivated, {
      windowTypes: ['normal'],
    });

    return () => {
      chrome.tabs.onActivated.removeListener(onActivated);
      chrome.windows.onFocusChanged.removeListener(onActivated);
    };
  }, [recording.isRecordingInProgress, cb]);

  return activeTabId;
}
