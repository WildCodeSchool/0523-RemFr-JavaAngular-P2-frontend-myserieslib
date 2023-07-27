import { Component, Input, OnInit } from '@angular/core';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';

@Component({
  selector: 'app-btn-add',
  templateUrl: './btn-add.component.html',
  styleUrls: ['./btn-add.component.scss'],
})
export class BtnAddComponent implements OnInit {
  @Input() id = '';
  isAlreadyInLibrary = true;

  constructor(private libraryService: LibrariesService) {}

  ngOnInit(): void {
    this.libraryService.getLibraries().subscribe((data) => {
      this.isAlreadyInLibrary = data.some((library) => library.serie.id === this.id);
    });
  }

  addSerieToLibrary() {
    if (!this.isAlreadyInLibrary) {
      this.libraryService.addSeries(this.id).subscribe(() => {
        this.isAlreadyInLibrary = true;
      });
    }
  }
}
