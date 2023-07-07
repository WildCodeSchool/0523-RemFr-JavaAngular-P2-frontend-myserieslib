import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILibraries } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class LibrariesService {
  url = 'http://localhost:8080/api/libraries';
  userId = '328f6085-7138-4be6-8a80-5b493c91556f';

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
}
