import React, { useEffect, useState } from 'react';
import { IControllerState } from './controllerState.mst';
import { createControllerInitialState } from './createControllerInitialState';

/**
 * The slightly awakward injection setup in place here exists becase we need to
 * both:
 * 1. Put the MST provider and context hook in an NX library along with the
 * rest of the code it makes use of
 * 2. Inject environment-specific dependencies and an initial state to
 * provider/hook combination which are only available in the deployed app
 *
 * In the main.tsx or app.tsx file where the provider is first used, it is
 * necessary to do something like this:
 *
 * @example
 * injectInitialState(
 *  createInitialState({
 *     logger: environmentSpecificLogger
 *   }),
 * );
 *
 */
let stateTreeRoot: undefined | IControllerState = undefined;

/**
 * Allows replacing this singleton with a store that has any environment-
 * specific dependencies injected into it
 */
export const injectInitialState = (state: IControllerState) => {
  stateTreeRoot = state;
};

/**
 * This shared context, closed over by both the MST provider and useMst hook,
 * allows these to share the singleton store.
 */
const MstContext = React.createContext<IControllerState | undefined>(
  stateTreeRoot,
);

/**
 * Allows the caller to access MST nodes in pure functional React components--
 * provided those components are also wrapped in `observer()` from
 * `mobx-react-lite`
 */
export const useControllerState = (): IControllerState => {
  const mst = React.useContext(MstContext);
  if (!mst)
    throw new Error(
      'Called `useStore` either without a provider or without given initial state to the provider. You probably need to put an `injectInitialState` call in your `main.tsx`',
    );
  return mst;
};

/**
 * When a React component is wrapped in this, we can use the useMst hook to
 * access the store inside of pure functional components-- provided those
 * components are also wrapped in `observer()` from `mobx-react-lite`
 */
export const ControllerMstProvider = ({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) => {
  //TODO - set up use effect to pull values from local storage and update stateTreeRoot
  // would remove state tree root from file and do this locally
  const [state, setState] = useState<IControllerState>();
  const [error, setError] = useState<Error>();
  useEffect(() => {
    const getInitialState = async () => {
      try {
        setState(await createControllerInitialState());
      } catch (error) {
        setError(error as Error);
      }
    };

    // Allows us to explicitly set the starting state in
    // tests using injectInitialState.
    if (stateTreeRoot) {
      setState(stateTreeRoot);
    } else {
      getInitialState();
    }
  }, []);

  if (error) throw error;
  if (state === undefined) {
    return null;
  }
  return <MstContext.Provider value={state}>{children}</MstContext.Provider>;
};
