import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, ILibraries, UserJWT } from 'src/app/utils/interface';
import { selectUser } from '../store/user.reducer';
import { IUser } from 'src/app/utils/interface';
import { Store } from '@ngrx/store';
@Injectable({
  providedIn: 'root',
})
export class LibrariesService {
  url = 'http://localhost:8080/api/libraries';
  user$: Observable<UserJWT> = this.store.select(selectUser);
  userId = '';

  constructor(public http: HttpClient, private store: Store) {
    this.user$.subscribe((user: UserJWT) => {
      this.userId = user.id;
    });
  }

  getLibraries(): Observable<ILibraries[]> {
    return this.http.get<ILibraries[]>(`${this.url}/${this.userId}`);
  }

  getLibrariesInProgress(): Observable<ILibraries[]> {
    return this.http.get<ILibraries[]>(`${this.url}/${this.userId}/in_progress`);
  }

  getLibrariesFinished(): Observable<ILibraries[]> {
    return this.http.get<ILibraries[]>(`${this.url}/${this.userId}/finished`);
  }

  getComments(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.url}/${id}/comments`);
  }
}
