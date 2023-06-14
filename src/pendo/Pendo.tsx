import React, { useEffect } from 'react';

import { createBrowserLogger } from '@castify/studio/observability/browser';

interface IGoogleUserInfo {
  email: string;
  id: string;
}
interface IVisitor {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface IAccount {
  id: string;
  name: string;
}
interface IUserInfo {
  visitor: IVisitor;
  account: IAccount;
  // guides must always be disabled in an extension environment
  disableGuides: true;
}

declare global {
  interface Window {
    pendo: {
      initialize: (info: IUserInfo) => void;
      track: (eventName: string) => void;
    };
  }
}

const logger = createBrowserLogger('Pendo');

/**
 * Pendo initializer
 *
 * Will add Pendo script and initialize Pendo with given user.
 *
 * This component must be added inside every entry point in the extension.
 * Please be sure that it is inside any of the relevant wrappers but otherwise at a top level.
 *
 * Renders no UI but uses React lifecycle
 */
export const Pendo: React.FC = () => {
  const urlToPendoScript =
    'chrome-extension://' + chrome.runtime.id + '/pendo.jsonp.js';

  // run pendo install script
  useEffect(() => {
    try {
      // Pendo set-up script copied from: https://app.pendo.io/setup
      // Instead of the below script pointing to the Pendo CDN, we must download a copy of the
      // script and use it locally. The URL with the location of that script is above and included
      // in the script below.

      // Smooshing this all to one line with prettier-ignore + @ts-ignore
      //     seems like the least painful way to do this.
      // prettier-ignore
      // eslint-disable-next-line
      // @ts-ignore
      // eslint-disable-next-line prefer-const, prefer-rest-params
      (function(p,e,n,d,o){let v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);y=e.createElement(n);y.async=!0;y.src=urlToPendoScript;z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');
    } catch (error) {
      logger.error('something went wrong initializing pendo', { error: error });
    }
  });

  // initialize pendo with the signed in user
  useEffect(() => {
    const parseUserInfo = async (googleUserInfo?: IGoogleUserInfo) => {
      if (!googleUserInfo) {
        // TODO: This guard needs tested more. This comes into play when a
        // user is signed in but sync is paused until they re-enter their password.
        return;
      }
      // on success, save user info for later use when identity api is not available
      // this is only the email and an obsfuscated id, so security risk is low.
      await chrome.storage.local.set({ localGoogleUserInfo: googleUserInfo });

      const userDomain = googleUserInfo.email?.split(/([^@]+)$/)?.[1];
      const userInfo: IUserInfo = {
        visitor: {
          id: googleUserInfo.id,
          email: googleUserInfo.email || '[email not available]',
          name: googleUserInfo.email || '[name not available]',
          role: '[user type not available]',
        },
        account: {
          id: userDomain || '[user domain not available]',
          name: userDomain || '[user domain not available]',
        },
        // this is required for extensions because of the no
        // third party code policy
        disableGuides: true,
      };
      window.pendo.initialize(userInfo);
      logger.info('Launching Pendo for user: ', {
        userEmail: userInfo.visitor.email,
      });
    };

    chrome.identity.getProfileUserInfo((userInfo: IGoogleUserInfo) => {
      parseUserInfo(userInfo);
    });
  }, []);

  // this component does not have any visual elements
  return null;
};
