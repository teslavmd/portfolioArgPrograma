import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = this.authenticationService.usuarioAuth;
    let request = req;


    if(currentUser && currentUser.jwtToken){
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.jwtToken}`,
        },
      });
      
    }

    return next.handle(request).pipe();
  }
}
