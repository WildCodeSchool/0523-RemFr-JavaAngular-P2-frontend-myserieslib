import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
@Component({
  selector: 'app-btn-add-desktop',
  templateUrl: './btn-add-desktop.component.html',
  styleUrls: ['./btn-add-desktop.component.scss'],
})
export class BtnAddDesktopComponent implements OnInit {
  @Input() id = '';
  isAlreadyInLibrary = true;

  constructor(private libraryService: LibrariesService, private router: Router) {}

  ngOnInit(): void {
    this.libraryService.getLibraries().subscribe((data) => {
      this.isAlreadyInLibrary = data.some((library) => library.serie.id === this.id);
    });
  }

  redirectToSerie() {
    this.router.navigate(['/detail', this.id]);
  }

  addSerieToLibrary() {
    if (!this.isAlreadyInLibrary) {
      this.libraryService.addSeries(this.id).subscribe(() => {
        this.isAlreadyInLibrary = true;
      });
    }
  }
}
