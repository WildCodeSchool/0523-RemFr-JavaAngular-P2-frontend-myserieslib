import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICategories } from 'src/app/utils/interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.scss'],
})
export class CategoryModalComponent {
  categoryName = '';
  constructor(
    public categoriesService: CategoriesService,
    private dialogRef: MatDialogRef<CategoryModalComponent>,
    @Inject(MAT_DIALOG_DATA) public category?: ICategories | null
  ) {
    this.categoryName = category ? category.name : '';
  }
  submitCategory(): void {
    if (this.category) {
      const newCategory: ICategories = {
        id: this.category.id,
        name: this.categoryName,
      };
      this.categoriesService.updateCategory(newCategory).subscribe(() => {
        this.dialogRef.close(newCategory);
      });
    } else {
      console.log(this.categoryName);
      const newCategory: ICategories = {
        id: '',
        name: this.categoryName,
      };
      this.categoriesService.postCategory(this.categoryName).subscribe(() => {
        this.dialogRef.close(newCategory);
      });
    }
  }
}
