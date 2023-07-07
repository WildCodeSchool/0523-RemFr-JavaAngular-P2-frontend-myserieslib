import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICategories } from 'src/app/utils/interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(public http: HttpClient) {}

  getCategories(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>('http://localhost:8080/categories');
  }
}
