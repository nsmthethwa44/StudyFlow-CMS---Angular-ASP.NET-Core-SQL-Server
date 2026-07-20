import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../../services/auth-service/auth-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authSvc: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const user = this.authSvc.getUserFromStorage();
    if (user && user.token) {
      const cloned = req.clone({
        setHeaders: { Authorization: `Bearer ${user.token}` }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
