import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ICategories } from 'src/app/utils/interface';

@Component({
  selector: 'app-filter-search-bar',
  templateUrl: './filter-search-bar.component.html',
  styleUrls: ['./filter-search-bar.component.scss'],
})
export class FilterSearchBarComponent {
  categories: ICategories[] = [{ id: '0', name: 'Toutes catégories' }];

  @Output() getSeries: EventEmitter<any> = new EventEmitter<any>();

  constructor(public categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories: ICategories[]) => {
      this.categories = categories;
      this.categories.unshift({ id: '', name: 'Toutes catégories' });
    });
  }

  formSearch: FormControl = new FormControl('');
  formFilter: FormControl = new FormControl('title');
  formCategories: FormControl = new FormControl('0');

  onSubmit() {
    this.getSeries.emit({
      search: this.formSearch.value,
      filter: this.formFilter.value,
      categories: this.formCategories.value,
    });
  }
}
