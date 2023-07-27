import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/services/store/user.reducer';
@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss'],
})
export class BtnAddComponent implements OnInit {
  @Input() id = '';
  isAlreadyInLibrary = false;

  constructor(
    private libraryService: LibrariesService,
    private router: Router,
    private modalService: ModalService,
    private toaster: ToastrService,
    private store: Store
  ) {}

  user: any = {};

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user) => {
      this.user = user;
    });
    if (this.user.nickname) {
      this.libraryService.getLibraries().subscribe((data) => {
        this.isAlreadyInLibrary = data.some((library) => library.serie.id === this.id);
      });
    }
  }

  addSerieToLibrary() {
    this.modalService.openModal(() => {
      if (!this.isAlreadyInLibrary) {
        this.libraryService.addSeries(this.id).subscribe(
          () => {
            this.isAlreadyInLibrary = true;
            this.toaster.success('Serie ajoutée à votre bibliothèque');
          },
          () => this.toaster.error('Une erreur est survenue')
        );
      }
    });
  }
}
