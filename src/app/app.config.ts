import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { interceptors } from './core/interceptors';
import {
  HttpBackend,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import {
  LANG,
  MultiTranslateLoader,
} from './core/services/translation.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors(interceptors)),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),

    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: LANG.AR,
        loader: {
          provide: TranslateLoader,
          useFactory: MultiTranslateLoader,
          deps: [HttpBackend],
        },
      })
    ),
  ],
};
