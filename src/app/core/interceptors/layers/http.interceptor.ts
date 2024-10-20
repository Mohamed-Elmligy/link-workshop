import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../environments/environment';

export const httpInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next
) => {
  const translateService = inject(TranslateService);
  const baseURL = environment.baseUrl;

  let modifiedRequset = request.clone({
    url: `${baseURL}${request.url}`,
    headers: request.headers.set(
      'Accept-Language',
      translateService.currentLang
    ),
  });

  return next(modifiedRequset);
};
