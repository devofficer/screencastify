// This value is dynamically updated when an annotated manifest is used for production builds
// It is used for Data Dog initialization and will track and sort logs based on versions.

// @ts-expect-error chrome namespace not available here, but is available where invoked
const version = chrome.runtime.getManifest().version_name;
export const APP_VERSION = version;
