import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { ICategories, IEpisode, ISeries } from 'src/app/utils/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  urlLink = environment.baseApiUrl + '/api';

  constructor(public http: HttpClient, private toaster: ToastrService) {}

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

  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(`${environment.baseApiUrl}/api/categories`);
  }

  getSeriesByCategory(categoryId: string): Observable<ISeries[]> {
    return this.http.get<ISeries[]>(`${environment.baseApiUrl}/api/categories`);
  }

  getTopSeriesByCategory(categoryId: string, limit: number): Observable<ISeries[]> {
    return this.http.get<ISeries[]>(
      `${environment.baseApiUrl}/api/series/categories/${categoryId}/series?limit=${limit}`
    );
  }

  createSeries(serie: ISeries) {
    return this.http.post<ISeries>(this.urlLink + '/series', serie).subscribe(
      () => this.toaster.success('Serie créée avec succès'),
      () => this.toaster.error('Echec lors de la création')
    );
  }

  updateSeries(id: string, serie: ISeries) {
    return this.http.put<ISeries>(this.urlLink + '/series/' + id, serie).subscribe(
      () => this.toaster.success('Serie modifiée avec succès'),
      () => this.toaster.error('Echec lors de la modification')
    );
  }

  deleteSeries(id: string) {
    return this.http.delete<ISeries>(this.urlLink + '/series/' + id).subscribe(
      () => this.toaster.success('Serie supprimée avec succès'),
      () => this.toaster.error('Echec lors de la suppression')
    );
  }
}
