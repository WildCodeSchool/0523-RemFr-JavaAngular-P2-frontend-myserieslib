import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IEpisode, ISeries } from 'src/app/utils/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  urlLink = environment.baseApiUrl + '/api';

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
    return this.http.get<ISeries[]>(this.urlLink + '/series?' + url);
  }

  getRating(id: string): Observable<number> {
    return this.http.get<number>(this.urlLink + '/libraries/' + id + '/ratings');
  }

  getSerieById(id: string): Observable<ISeries> {
    return this.http.get<ISeries>(this.urlLink + '/series/' + id);
  }

  getEpisodes(id: string): Observable<IEpisode[]> {
    return this.http.get<IEpisode[]>(this.urlLink + '/episodes/series/' + id);
  }
}
