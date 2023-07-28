import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalService } from '../services/modal/modal.service';
import { UserService } from '../services/user/user.service';
import { Store } from '@ngrx/store';
import { selectUser } from '../services/store/user.reducer';
import { map } from 'rxjs/operators'; // Import the map operator

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService, private store: Store) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(selectUser).pipe(
      map((user) => {
        
        
        if (user?.role === 'admin') {
          return true;
        } else {
          return this.router.parseUrl('/');
        }
      })
    );
  }
}
