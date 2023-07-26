import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Store } from '@ngrx/store';
import { selectUser } from '../store/user.reducer';
import { ICategories, IUser, UserJWT } from 'src/app/utils/interface';
import { Observable } from 'rxjs';
import { CategoryModalComponent } from 'src/app/components/dashboard/modals/category-modal/category-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog, private store: Store) {}

  openModal(callback: any): void {
    const user$: Observable<IUser> = this.store.select(selectUser);

    user$.subscribe((user: UserJWT) => {
      if (!user.JWT) {
        this.dialog.open(ModalComponent, {
          width: '400px',
        });
      } else {
        callback(user);
      }
    });
  }

  openCategoryModal(callback: any, category?: ICategories): void {
    const dialogRef = this.dialog.open(CategoryModalComponent, {
      width: '20rem',
      data: category,
    });
    dialogRef.afterClosed().subscribe((result) => {
      category ? callback(category, result) : callback(result);
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }
}
