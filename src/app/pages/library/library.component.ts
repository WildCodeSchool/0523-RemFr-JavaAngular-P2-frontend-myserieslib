import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HistoryService } from 'src/app/services/history/history.service';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { IEpisode, IHistory, ILibraries } from 'src/app/utils/interface';

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

  episodesList: IEpisode[] | undefined;

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
      this.cardsHistory.sort((a, b) => {
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime();
      });
    });

  }
  checkOverflow(element: HTMLElement) {
    return element.offsetWidth < element.scrollWidth;
  }
  checkOverflowAsync(element: HTMLElement) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.checkOverflow(element));
      }, 0);
    });
  }
  

  onClickLeft(): void {
    const containerCard = document.querySelector('.carouselContainer');
    const card = document.querySelector('.cardWidth') as HTMLElement;

    if (containerCard && card) {
      const cardStyle = getComputedStyle(card);
      const cardWidth = card.offsetWidth + parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
      containerCard.scrollLeft -= cardWidth;
    }
  }

  onClickRight(): void {
    const containerCard = document.querySelector('.carouselContainer');
    const card = document.querySelector('.cardWidth') as HTMLElement;

    if (containerCard && card) {
      const cardStyle = getComputedStyle(card);
      const cardWidth = card.offsetWidth + parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
      containerCard.scrollLeft += cardWidth;
    }
  }
}
