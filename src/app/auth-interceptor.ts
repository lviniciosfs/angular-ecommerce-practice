import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = 'token'
  req = req.clone({
    setHeaders: {
      'Auth': authToken
    } 
  })


  return next(req);
};
