import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment, ILibraries } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class LibrariesService {
  url = 'http://localhost:8080/api/libraries';
  userId = '73bf5519-4ba6-4353-9bac-cb976d5e4405';

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
}
