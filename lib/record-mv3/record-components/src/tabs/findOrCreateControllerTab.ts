import { createBrowserLogger } from '@castify/studio/observability/browser';

const logger = createBrowserLogger('findOrCreateControllerTabs');
export async function findOrCreateControllerTab() {
  const controllerTabArray = await chrome.tabs.query({
    url: `${window.location.origin}/controller.html`,
  });

  if (controllerTabArray.length === 0) {
    return chrome.tabs.create({
      url: 'controller.html',
      active: false,
      pinned: true,
    });
  } else if (controllerTabArray.length === 1) {
    return controllerTabArray[0];
  } else {
    // It is assumed that length can only be 0, 1, or > 1
    logger.info('TOO MANY TABS ARE OPEN RETURNING FIRST ONE');
    return controllerTabArray[0];
  }
}
