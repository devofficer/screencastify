import { createCtx } from '@castify/fe-common';
import { safeWindowOpen } from '@castify/safe-window-open';
import { environment } from '@castify/studio/env/browser';
import { useEffect, useState } from 'react';

export interface CleverUser {
  id: string;
  email: string;
  displayName: string;
  isSignedIn: boolean;
}
interface CleverAuth {
  currentUser: CleverUser;
  signIn: () => void;
  signOut: () => void;
  setCleverUser: (user: CleverUser) => void;
}

const [useInstance, Provider] = createCtx<CleverAuth>('CleverAuthInstance');

export const useCleverInstance = useInstance;

const defaultCleverUser: CleverUser = {
  isSignedIn: false,
  id: '',
  displayName: '',
  email: '',
};

export const CleverAuthProvider: React.FC = (props) => {
  const [currentUser, setCurrentUser] = useState<CleverUser>(defaultCleverUser);

  const loginWithClever = () => {
    const url = `${environment.cleverAuth.authorizationUrl}?response_type=code&redirect_uri=${environment.cleverAuth.redirectUrl}&client_id=${environment.cleverAuth.clientId}`;
    safeWindowOpen(url, '_self');
  };

  const setCleverUser = (user: CleverUser) => {
    setCurrentUser(user);
    localStorage.setItem('castifyCleverUser', JSON.stringify(user));
  };

  // this effect and the local storage item allow us to persist a clever user between refreshes
  useEffect(() => {
    const previousCleverUser = localStorage.getItem('castifyCleverUser');
    if (previousCleverUser) {
      setCleverUser(JSON.parse(previousCleverUser));
    }
  }, []);

  const cleverInstance = {
    currentUser,
    signIn: loginWithClever,
    signOut: () => {},
    setCleverUser,
  };
  return <Provider value={cleverInstance}>{props.children}</Provider>;
};
