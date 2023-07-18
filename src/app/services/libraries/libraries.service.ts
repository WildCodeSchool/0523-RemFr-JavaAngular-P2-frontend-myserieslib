import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, ILibraries } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class LibrariesService {
  url = 'http://localhost:8080/api/libraries';
  userId = '0de3b99c-da13-4448-8336-de568f072ad3';

  constructor(public http: HttpClient) {}

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
