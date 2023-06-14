/**
 * This smooths over the somewhat non-intuitive way that chrome deals with
 * the idea of a "focused" window. Querying a tab with the {currentWindow: true}
 * filter only filters for tabs in the window where the script is executing,
 * NOT the window that is currently active to the user
 *
 * A simple fix is to get all active tabs (which will return the active
 * tab for each open window) and get all window, then find the single window
 * marked "focused" (there can be at most one) and find the tab whose
 * windowID matches that window's id.
 *
 * However, it is possible (and common) to query the windows with getAll
 * and find that none are marked as focused. Among other reasons,
 * This could be because chrome itself is not currently focused, or
 * because we're filtering for only 'normal' window types
 * (not popups, etc), and the user has a popup focused.
 *
 * The chrome.windows API has a .getLastFocused() method, which you would
 * think could reliably get the window that was most recently brought to the
 * front, and therefore could be a way to filter our active tabs.
 *
 * Nope.
 *
 * In cases similar to those outlined above, if you're filtering out
 * certain window types from the results and the last focused window is of
 * a blocked type, chrome will not look at the previously focused window,
 * but will instead return what appears to be the *first* opened window
 * of the given type. This is particularly relevant because when you open
 * the popup for the extension, that does not count as a normal window
 * and therefore target tab for the initial injection of a desktop recording
 * is very unreliable.
 *
 * So the implementation below is a compromise that seems to support
 * most use cases. If there is a "normal" window marked as focused,
 * it will return the active tab in that window. Otherwise it will
 * return the active tab in the window where the script is currently
 * executing.
 *
 * Further tuning of this function may be necessary as we hear from our
 * beloved users.
 *
 * Dammit Chrome.
 */

export async function findActiveTab() {
  const allWindows = await chrome.windows.getAll({ windowTypes: ['normal'] });
  const focusedWindow = allWindows.find((wdw) => wdw.focused);

  const tab = focusedWindow
    ? (await chrome.tabs.query({ active: true })).find(
        (tab) => tab.windowId === focusedWindow.id,
      )
    : (await chrome.tabs.query({ active: true, currentWindow: true }))[0];

  return tab || null;
}
