import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICategories } from 'src/app/utils/interface';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent {
  @Input() categoryName = '';
  @Input() category?: ICategories;
  @Output() addCategory: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateCategory: EventEmitter<string> = new EventEmitter<string>();

  constructor(private modalService: ModalService) {}

  submitCategory(): void {
    if (!this.category) {
      this.addCategory.emit(this.categoryName);
      this.categoryName = '';
    } else {
      this.updateCategory.emit(this.category.name);
      this.modalService.closeModal();
    }
  }
}
