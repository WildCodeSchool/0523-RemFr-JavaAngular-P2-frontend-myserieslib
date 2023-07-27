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
    return this.http.get<ICategories[]>(environment.baseApiUrl + '/api/categories/allCategories');
  }

  deleteCategory(categoryId: string): Observable<ICategories> {
    return this.http.delete<ICategories>(environment.baseApiUrl + '/api/categories/' + categoryId);
  }

  updateCategory(category: ICategories): Observable<ICategories[]> {
    return this.http.put<ICategories[]>(environment.baseApiUrl + '/api/categories/' + category.id, category);
  }

  postCategory(categoryName: string): Observable<ICategories[]> {
    return this.http.post<ICategories[]>(environment.baseApiUrl + '/api/categories', categoryName);
  }

  getCategoriesWithSeries(): Observable<ICategories[]> {
    return this.http.get<ICategories[]>(environment.baseApiUrl + '/api/categories/categoriesWithSeries');
  }
}
