import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICategories } from 'src/app/utils/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(public http: HttpClient) {}

  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(environment.baseApiUrl + '/api/categories');
  }
}
