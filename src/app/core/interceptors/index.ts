import { HttpInterceptorFn } from '@angular/common/http';

import { internetInterceptor } from './layers/internet.interceptor';
import { authInterceptor } from './layers/auth.interceptor';
import { httpInterceptor } from './layers/http.interceptor';

export const interceptors: HttpInterceptorFn[] = [
  internetInterceptor,
  authInterceptor,
  httpInterceptor,
];
