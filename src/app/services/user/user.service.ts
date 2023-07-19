import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private store: Store, private http: HttpClient) {}

  getJWT(): void {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      this.store.dispatch({ type: 'USER_JWT', payload: jwt });
    }
  }

  login(user: any) {
    return this.http.post('http://localhost:8080/api/auth/login', user).subscribe((res: any) => {
      console.log(res);
    });
  }

  register(user: any) {
    return this.http.post('http://localhost:8080/api/auth/register', user).subscribe((res: any) => {
      console.log(res);
    });
  }
}
