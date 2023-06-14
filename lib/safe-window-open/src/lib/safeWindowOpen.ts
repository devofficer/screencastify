import { sanitizeUrl } from '@braintree/sanitize-url';
export const safeWindowOpen = (
  url: string,
  target?: string,
  features?: string,
) => window.open(sanitizeUrl(url), target, features);
