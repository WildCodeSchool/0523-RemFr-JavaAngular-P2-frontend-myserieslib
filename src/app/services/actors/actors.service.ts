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

  addActor(actor: IActors): Observable<IActors> {
    return this.http.post<IActors>(`${environment.baseApiUrl}/api/actors`, actor);
  }

  deleteActor(id: string): Observable<IActors> {
    return this.http.delete<IActors>(`${environment.baseApiUrl}/api/actors/${id}`);
  }

  updateActor(actor: IActors): Observable<IActors> {
    return this.http.put<IActors>(`${environment.baseApiUrl}/api/actors/${actor.id}`, actor);
  }

  searchActor(name: string): Observable<IActors[]> {
    return this.http.get<IActors[]>(`${environment.baseApiUrl}/api/actors/search-actors?fullName=${name}`);
  }
}
