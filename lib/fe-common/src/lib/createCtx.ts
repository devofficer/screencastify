import React from 'react';

/**
 * A helper to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 * {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context}
 */
function createCtx<A extends unknown | null>(label: string) {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (c === undefined)
      throw new Error(
        'useCtx must be inside a Provider with a value. Provider label: ' +
          label,
      );
    return c;
  }
  return [useCtx, ctx.Provider] as const; // 'as const' makes TypeScript infer a tuple
}

export default createCtx;
