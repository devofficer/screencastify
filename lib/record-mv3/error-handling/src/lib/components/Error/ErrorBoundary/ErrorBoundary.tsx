import { createBrowserLogger } from '@castify/studio/observability/browser';
import { ErrorPage, ErrorTypeEnum } from '../ErrorPage/ErrorPage';

/**
 * The ErrorBoundary component can be directly imported from the library 'react-error-boundary' and wrap around components
 * individually to catch React rendering errors.
 * There are 2 other APIs in place of the FallbackComponent: fallbackRender (inline error fallback UI and can access elements
 * in the scope of the component that's using ErrorBoundary) and fallback (similar to React.Suspense, not recommended).
 * The FallbackComponent is required for ErrorBoundary if the other 2 are not provided.
 *
 * See observability-browser readme on how to handle errors from side effects:
 *    Event handlers
 *    Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
 *    Server side rendering
 *    Errors thrown in the error boundary itself (rather than its children)
 * */

// export for unit test
export const logger = createBrowserLogger('ReactErrorBoundary');

export const ErrorFallback = () => {
  return <ErrorPage errorType={ErrorTypeEnum.refreshPage} />;
};

// handle React rendering errors and log errors to our logger
export const componentErrorHandler = (
  error: Error,
  info: { componentStack: string },
): void => {
  logger.error(`An error was caught by the global Error Boundary`, {
    error,
    message: error.message,
    stack: error.stack,
    componentStack: info.componentStack,
  });
};
