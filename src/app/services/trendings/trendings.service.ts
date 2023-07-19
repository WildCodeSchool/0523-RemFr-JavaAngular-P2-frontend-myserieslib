import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISeries } from 'src/app/utils/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrendingsService {
  constructor(public http: HttpClient) {}
  getTrendings(): Observable<ISeries[]> {
    return this.http.get<ISeries[]>(environment.baseApiUrl + '/api/series/trending');
  }
}
