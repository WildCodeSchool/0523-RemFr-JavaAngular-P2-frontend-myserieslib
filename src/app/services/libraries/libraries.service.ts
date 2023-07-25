import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategories, IComment, ILibraries, UserJWT } from 'src/app/utils/interface';
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
    return this.http.get<ILibraries[]>(`${this.url}/user`);
  }

  getLibrariesInProgress(): Observable<ILibraries[]> {
    return this.http.get<ILibraries[]>(`${this.url}/in_progress`);
  }

  getLibrariesNotStarted(): Observable<ILibraries[]> {
    return this.http.get<ILibraries[]>(`${this.url}/not_started`);
  }

  getLibrariesFinished(): Observable<ILibraries[]> {
    return this.http.get<ILibraries[]>(`${this.url}/finished`);
  }

  getLibrariesRecentlySeen(): Observable<ILibraries[]> {
    return this.http.get<ILibraries[]>(`${this.url}/recently_seen`);
  }

  getComments(id: string): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.url}/${id}/comments`);
  }

  getUserSerieDetails(id: string): Observable<ILibraries> {
    return this.http.get<ILibraries>(`${this.url}/series/${id}`);
  }

  updateScore(id: string, score: number): Observable<ILibraries> {
    const scoreBody = { score: score };
    return this.http.put<ILibraries>(`${this.url}/series/${id}/score`, scoreBody);
  }

  updateComment(id: string, comment: string): Observable<ILibraries> {
    const commentBody = { comment: comment };
    return this.http.put<ILibraries>(`${this.url}/series/${id}/comment`, commentBody);
  }

  addSeries(id: string): Observable<ILibraries> {
    return this.http.post<ILibraries>(`${this.url}/add/${id}`, {});
  }

  getSuggestions(userId: string, limit = 10): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(`${environment.baseApiUrl}/api/libraries/users/${userId}/frequenquent-categories?limit=${limit}`);
  }
}
