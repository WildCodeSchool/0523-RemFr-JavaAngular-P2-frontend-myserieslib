import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILibraries } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class LibrariesService {
  url = 'http://localhost:8080/api/libraries';
  userId = '02745d50-4761-4781-a094-caac19991f85';

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
