import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategories } from 'src/app/utils/interface';
import { ModalService } from 'src/app/services/modal/modal.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent {
  @Input() categories: ICategories[] = [];
  @Output() updateCategoryEvent = new EventEmitter<ICategories>();

  constructor(
    
    private modalService: ModalService,
   
    private categoriesService: CategoriesService,
    private toastr: ToastrService
  ,
    private toastr: ToastrService
  ) {}

  deleteCategory(category: ICategories): void {
    this.categoriesService.deleteCategory(category.id).subscribe(
      () => {
        this.updateCategoryEvent.emit();
      },
      (error) => {
        console.error('Error deleting category:', error);
      }
    );
  }

  openUpdateModal(category?: ICategories): void {
    this.modalService.openCategoryModal(() => {
      this.updateCategoryEvent.emit();
    }, category);
  }
}
