import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ISeries } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor(public http: HttpClient) {}

  getSeries(search?: string, filter?: string, category?: string): Observable<ISeries[]> {
    let url = '';
    if (search) {
      url += '&title=' + search;
    }
    if (filter) {
      url += '&filter=' + filter;
    }
    if (category && category !== '0') {
      url += '&category=' + category;
    }
    return this.http.get<ISeries[]>('http://localhost:8080/api/series?' + url);
  }

  getRating(id: string): Observable<number> {
    return this.http.get<number>('http://localhost:8080/api/libraries/' + id + '/ratings');
  }

  getSerieById(id: string): Observable<ISeries> {
    return this.http.get<ISeries>('http://localhost:8080/api/series/' + id);
  }

  getEpisodes(id: string): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/episodes/series/' + id);
  }
}
