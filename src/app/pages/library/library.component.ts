import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { IHistory, ILibraries } from 'src/app/utils/interface';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  cardsInProgress: ILibraries[] | undefined;
  cardsNotStarted: ILibraries[] | undefined;
  cardsFinished: ILibraries[] | undefined;

  cardsHistory: IHistory[] | undefined;

  constructor(private librariesService: LibrariesService, private historyService: HistoryService) {}

  ngOnInit(): void {
    this.librariesService.getLibrariesInProgress().subscribe((res) => {
      this.cardsInProgress = res.map((item: ILibraries) => {
        return { ...item };
      });
    });
    this.librariesService.getLibrariesNotStarted().subscribe((res) => {
      this.cardsNotStarted = res.map((item: ILibraries) => {
        return { ...item };
      });
    });
    this.librariesService.getLibrariesFinished().subscribe((res) => {
      this.cardsFinished = res.map((item: ILibraries) => {
        return { ...item };
      });
    });
    this.historyService.getHistory().subscribe((res) => {
      this.cardsHistory = res.map((item: IHistory) => {
        return { ...item };
      });
    });
  }
}
