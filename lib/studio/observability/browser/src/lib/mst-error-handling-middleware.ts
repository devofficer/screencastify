/*!
 * Copyright 2022 Screencastify LLC
 */
import { createBrowserLogger } from './browser-logger';
import type { IBrowserLogger } from './browser-logger';
import { addMiddleware, getSnapshot } from 'mobx-state-tree';
import type { IStateTreeNode } from 'mobx-state-tree';

// export for unit test
export const logger: IBrowserLogger = createBrowserLogger(
  'MSTErrorHandlerMiddleware',
);

// export and type root as generic IStateTreeNode to take in IRoot and unit test root
export const addErrorHandlerMiddleware = (root: IStateTreeNode) => {
  addMiddleware(root, (call, next) => {
    try {
      next(call);
    } catch (error: unknown) {
      const stateSnapshot = getSnapshot(root);
      // Specifically include error stack, as error appears to be error: { origin: logger } which doesn't tell us anything
      if (error instanceof Error) {
        logger.error(
          `An error was caught by the mst middleware for action invocation ${call.name}`,
          {
            errorStack: error.stack,
            stateSnapshot,
          },
        );
      } else {
        logger.error(
          `An error was caught by the mst middleware for action invocation ${call.name}`,
          {
            error: JSON.stringify(error),
            stateSnapshot,
          },
        );
      }
    }
  });
};
