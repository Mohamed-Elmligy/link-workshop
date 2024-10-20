import { Injectable, inject } from '@angular/core';
import { HttpBackend } from '@angular/common/http';

import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { TranslateService } from '@ngx-translate/core';

export const MultiTranslateLoader = (
  http: HttpBackend
): MultiTranslateHttpLoader =>
  new MultiTranslateHttpLoader(http, [
    '../../../assets/i18n/main/',
    '../../../assets/i18n/',
  ]);

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private languages = ['en', 'ar'];
  private translateService = inject(TranslateService);

  constructor() {
    this.translateService.addLangs(this.languages);
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
}

export enum LANG {
  AR = 'ar',
  EN = 'en',
}
