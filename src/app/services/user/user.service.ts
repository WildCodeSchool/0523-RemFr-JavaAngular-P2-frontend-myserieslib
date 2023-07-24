import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { ILogin, IRegister } from 'src/app/utils/interface';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { IUser } from 'src/app/utils/interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store, private http: HttpClient, private router: Router) {}

  getUser(): Observable<IUser[]> {
    return this.http.get<any[]>(environment.baseApiUrl + '/api/users').pipe(
      map((data) =>
        data.map((user) => ({
          ...user,
          role: user.role.name || 'user',
        }))
      )
    );
  }

  getJWT(): void {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const decoded: any = jwt_decode(jwt);
      const expirationDate = new Date(decoded.exp * 1000);
      if (expirationDate > new Date()) {
        this.store.dispatch({ type: 'USER_JWT', payload: jwt });
        this.store.dispatch({ type: 'USER_NICKNAME', payload: localStorage.getItem('nickname') });
      }
    }
  }

  login(user: ILogin) {
    return this.http.post(environment.baseApiUrl + '/api/auth/login', user).subscribe(
      (res: any) => {
        this.store.dispatch({ type: 'USER_LOGIN', payload: res.user });
        this.store.dispatch({ type: 'USER_JWT', payload: res.token });
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('nickname', res.user.nickname);
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error("Une erreur s'est produite lors de la connexion :", error);
      }
    );
  }

  register(user: IRegister) {
    return this.http.post(`${environment.baseApiUrl}/api/auth/register`, user).subscribe(
      (registerData: any) => {
        this.router.navigate(['/']);
      },
      (error: any) => {
        console.error("Une erreur s'est produite lors de l'inscription :", error);
      }
    );
  }
}
