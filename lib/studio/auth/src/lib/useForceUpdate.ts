import { useState } from 'react';

/**
 * Use when you need to imperatively trigger a rerender of a component.
 * Specifically this is used to get clean UI when transitioning between
 * logged-in and logged-out states, or vice versa.
 *
 * CAUTION - This basically goes against the whole reason that react exists.
 * If you think you need to forcibly trigger an update of the UI, you
 * probably need to rethink how you're using your props/state/hooks.
 */

export const useForceUpdate = () => {
  const [, _setRenderCount] = useState(0);
  const forceUpdate = () => {
    _setRenderCount((ct) => ct + 1);
  };

  return forceUpdate;
};
