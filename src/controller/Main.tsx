// external libs
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@mui/material';
import { css, Global } from '@emotion/react';

// internal libs
import { Pendo } from '../pendo/Pendo';
import { Controller } from './Controller';
import { theme } from '@castify/fe-common';
import { PostMessageAuthProvider } from '@castify/studio/auth';
import {
  initObservability,
  SignInLoader,
  SignInRequired,
  setObservabilityContext,
} from '@castify/record-mv3/common';
import { ControllerMstProvider } from '@castify/record-mv3/record-components';
import {
  componentErrorHandler,
  ErrorFallback,
  OnUnhandledRejection,
} from '@castify/record-mv3/error-handling';

initObservability('-controller');
setObservabilityContext();

ReactDOM.render(
  <StrictMode>
    <ControllerMstProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={componentErrorHandler}
      >
        <OnUnhandledRejection>
          <PostMessageAuthProvider
            loadingElement={<SignInLoader />}
            signInElement={<SignInRequired />}
          >
            <ThemeProvider theme={theme}>
              <Global
                styles={css`
                  body {
                    margin: 0px !important;
                    height: 100%;
                    width: 100%;
                    background-attachment: fixed;
                  }
                `}
              />
              <Controller />
              <Pendo />
            </ThemeProvider>
          </PostMessageAuthProvider>
        </OnUnhandledRejection>
      </ErrorBoundary>
    </ControllerMstProvider>
  </StrictMode>,
  document.getElementById('root'),
);
