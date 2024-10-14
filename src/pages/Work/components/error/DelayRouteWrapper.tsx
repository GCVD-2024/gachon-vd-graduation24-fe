import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import DelayedComponent from './DelayedComponent';


const DelayRouteWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={() => reset()} FallbackComponent={ErrorFallback}>
          <Suspense
            fallback={
              <DelayedComponent>
                <div style={{ backgroundColor: 'black', color: 'white' }}> Loading... </div>
              </DelayedComponent>
            }
          >
            {children}
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default DelayRouteWrapper;
