import { Component, OnInit } from '@angular/core';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ILibraries } from 'src/app/utils/interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  cardsInProgress: ILibraries[] | undefined;
  cardsFinished: ILibraries[] | undefined;

  constructor(private librariesService: LibrariesService) {}

  ngOnInit(): void {
    this.librariesService.getLibrariesInProgress().subscribe((res) => {
      this.cardsInProgress = res.map((item: ILibraries) => {
        return { ...item };
      });
    });
    this.librariesService.getLibrariesFinished().subscribe((res) => {
      this.cardsFinished = res.map((item: ILibraries) => {
        return { ...item };
      });
    });
  }
}
