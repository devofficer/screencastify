import type { BaseEnvironment } from './environmentType';

/**
 * Where config that' shared across all environments live
 */
export const baseEnvironment: BaseEnvironment = {
  /**
   * The maximum number of entries to store on the editor's undo stack
   */
  maxUndoHistoryLength: 50,
};
