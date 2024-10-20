import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next
) => {
  if (!unAuthenticatedApis.includes(request.url)) {
    const authenticatedRequest = request.clone({
      // JWT TOKEN
      headers: request.headers.set('Authorization', `Bearer`),
    });
    return next(authenticatedRequest);
  }
  return next(request);
};

// apis do not need to be authenticated
const unAuthenticatedApis: string[] = [];
