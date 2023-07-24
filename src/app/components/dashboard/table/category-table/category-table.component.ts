import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategories } from 'src/app/utils/interface';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss'],
})
export class CategoryTableComponent {
  @Input() categories: ICategories[] = [];
  @Input() category?: ICategories;
  @Input() deleteCategory!: (category: ICategories) => void;
  @Output() editCategory: EventEmitter<ICategories> = new EventEmitter<ICategories>();

  constructor(private modalService: ModalService) {}
  openCategoryModal(category?: ICategories): void {
    this.editCategory.emit(category);
    this.modalService.openCategoryModal((result: any) => {
      console.log(result);
    }, category);
  }
}
