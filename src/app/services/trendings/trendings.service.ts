import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISeries } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class TrendingsService {
  constructor(public http: HttpClient) {}
  getTrendings(): Observable<ISeries[]> {
    return this.http.get<ISeries[]>('http://localhost:8080/api/series/trending');
  }
}
