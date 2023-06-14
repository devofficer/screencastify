import { useEffect } from 'react';

type TabId = number | null;

type TabDetails = chrome.webNavigation.WebNavigationFramedCallbackDetails;

const isPopup = async (tabDetails: TabDetails) => {
  const tab = await chrome.tabs.get(tabDetails.tabId);
  const wdw = await chrome.windows.get(tab.windowId);
  return wdw.type === 'popup';
};

const emptyTabHandler = (_tabId: TabId) => {};

export function useTabNavigation(
  trackedTabId: TabId,
  options?: {
    activeWhen: boolean;
    onBeforeNavigate?: (tabId?: TabId) => void;
    onDOMContentLoaded?: (tabId?: TabId) => void;
    onRemoved?: (tabId?: TabId) => void;
  },
) {
  //Sets up listeners for navigations events while we're recording desktop
  //updates the injectable tab id state to trigger the above use effect
  //Uses activeTabId in conditionals

  const tabNavigationActive = options?.activeWhen;
  const onBeforeNavigate = options?.onBeforeNavigate || emptyTabHandler;
  const onDOMContentLoaded = options?.onDOMContentLoaded || emptyTabHandler;
  const onRemoved = options?.onRemoved || emptyTabHandler;

  useEffect(() => {
    /**
     * This function checks that the tab id matches the target tab and that the
     * frame id of the nav event is on the outer frame of the webpage. This makes it so
     * we don't set navigation listeners when iframes are loaded in a page
     * @param details
     * @returns boolean
     */
    const isTrackedTab = (details: TabDetails) => {
      return details.tabId === trackedTabId && details.frameId === 0;
    };

    // @TODO - derived property 'recordingInProgress' or similar
    if (!tabNavigationActive) return;

    const guardedOnBeforeNavigate = async (details: TabDetails) => {
      if (await isPopup(details)) return;

      if (isTrackedTab(details)) {
        onBeforeNavigate(details.tabId);
      }
    };
    chrome.webNavigation.onBeforeNavigate.addListener(guardedOnBeforeNavigate);

    const guardedOnContentLoaded = async (details: TabDetails) => {
      if (await isPopup(details)) return;

      if (isTrackedTab(details)) {
        onDOMContentLoaded(details.tabId);
      }
    };
    chrome.webNavigation.onDOMContentLoaded.addListener(guardedOnContentLoaded);

    const guardedOnRemoved = (removedTabId: number) => {
      if (removedTabId === trackedTabId) {
        onRemoved(removedTabId);
      }
    };
    chrome.tabs.onRemoved.addListener(guardedOnRemoved);

    return () => {
      chrome.webNavigation.onBeforeNavigate.removeListener(
        guardedOnBeforeNavigate,
      );
      chrome.webNavigation.onDOMContentLoaded.removeListener(
        guardedOnContentLoaded,
      );
      chrome.tabs.onRemoved.removeListener(guardedOnRemoved);
    };
  }, [
    tabNavigationActive,
    trackedTabId,
    onBeforeNavigate,
    onDOMContentLoaded,
    onRemoved,
  ]);
}
