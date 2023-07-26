import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IActors } from 'src/app/utils/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(public http: HttpClient) {}

  getActors(): Observable<IActors[]> {
    return this.http.get<IActors[]>(`${environment.baseApiUrl}/api/actors`);
  }
}
