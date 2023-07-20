import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, ILibraries, UserJWT } from 'src/app/utils/interface';
import { selectUser } from '../store/user.reducer';
import { IUser } from 'src/app/utils/interface';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LibrariesService {
  url = environment.baseApiUrl + '/api/libraries';
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

  getUserSerieDetails(id: string): Observable<ILibraries> {
    return this.http.get<ILibraries>(`${this.url}/${this.userId}/series/${id}`);
  }

  updateScore(id: string, score: number): Observable<ILibraries> {
    const scoreBody = { score: score };
    return this.http.put<ILibraries>(`${this.url}/${this.userId}/series/${id}/score`, scoreBody);
  }

  updateComment(id: string, comment: string): Observable<ILibraries> {
    const commentBody = { comment: comment };
    return this.http.put<ILibraries>(`${this.url}/${this.userId}/series/${id}/comment`, commentBody);
  }
}
