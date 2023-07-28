import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IEpisode } from 'src/app/utils/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  url = environment.baseApiUrl + '/api/episodes';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getAllEpisodes(): Observable<IEpisode[]> {
    return this.http.get<IEpisode[]>(`${this.url}`);
  }

  getAllEpisodesBySerie(id: string): Observable<IEpisode[]> {
    return this.http.get<IEpisode[]>(`${this.url}/series/${id}`);
  }

  getEpisodeById(id: string): Observable<IEpisode> {
    return this.http.get<IEpisode>(`${this.url}/${id}`);
  }

  createEpisode(episode: IEpisode, id: string) {
    return this.http.post<IEpisode>(`${this.url}/series/${id}/add`, episode).subscribe(
      () => this.toastr.success('Épisode créé avec succès'),
      () => this.toastr.error('Echec lors de la création')
    );
  }

  updateEpisode(episode: IEpisode, id: string) {
    return this.http.put<IEpisode>(`${this.url}/${id}`, episode).subscribe(
      () => this.toastr.success('Épisode modifié avec succès'),
      () => this.toastr.error('Echec lors de la modification')
    );
  }

  deleteSeries(id: string) {
    return this.http.delete<IEpisode>(`${this.url}/${id}`).subscribe(
      () => this.toastr.success('Épisode supprimé avec succès'),
      () => this.toastr.error('Echec lors de la suppression')
    );
  }
}
