import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/utils/interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ModalService } from 'src/app/services/modal/modal.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategories[] = [];
  totalCategories = 0;

  constructor(public categoriesService: CategoriesService, private modalService: ModalService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories: ICategories[]) => {
      this.categories = categories;
      this.totalCategories = this.categories.length;
    });
  }

  openAddModal(): void {
    this.modalService.openCategoryModal(() => {
      this.ngOnInit();
    });
  }

  onCategoryDeleted(): void {
    this.ngOnInit();
  }
}
