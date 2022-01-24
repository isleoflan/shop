import { ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { environment } from '../../environments/environment';


export class SentryErrorHandlerService implements ErrorHandler {

  constructor() {
    Sentry.init({
      dsn: environment.sentryDsn,
      environment: environment.production ? 'production' : 'development',
      integrations: [
        new Integrations.BrowserTracing({
          tracingOrigins: ['localhost', environment.apiUrl, environment.ssoApiUrl],
          routingInstrumentation: Sentry.routingInstrumentation
        })
      ],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 0.2
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleError(error: any): void {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

export function errorHandlerFactory() {
  if (environment.production) {
    return new SentryErrorHandlerService();
  }
  return new ErrorHandler();
}
