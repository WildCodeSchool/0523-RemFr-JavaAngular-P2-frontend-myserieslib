import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHistory } from 'src/app/utils/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  url = environment.baseApiUrl + '/api/history';

  constructor(public http: HttpClient) {}

  getHistory(): Observable<IHistory[]> {
    return this.http.get<IHistory[]>(`${this.url}/user`);
  }

  addEpisode(episodeId: string): Observable<IHistory> {
    return this.http.post<IHistory>(`${this.url}/add/${episodeId}`, {});
  }
}
