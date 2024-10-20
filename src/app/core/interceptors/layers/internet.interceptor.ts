import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';

export const internetInterceptor: HttpInterceptorFn = (req, next) => {
  if (!window.navigator.onLine) {
    // show error here
    return throwError(() => '');
  }
  return next(req);
};
