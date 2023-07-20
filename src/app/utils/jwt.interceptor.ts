import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { selectJWT } from '../services/store/user.reducer';
import { switchMap, take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(selectJWT).pipe(
      take(1),
      switchMap((jwt: string) => {
        if (jwt) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${jwt}`,
            },
          });
        }

        return next.handle(request);
      })
    );
  }
}
