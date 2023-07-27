import { Component, OnInit } from '@angular/core';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';
import { ICategories, ISeries } from 'src/app/utils/interface';
import { SafeResourceUrl } from '@angular/platform-browser';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title1 = 'Séries les mieux notées';
  title2 = 'Séries tendances';
  trendingSeries: ISeries[] = [];
  topRatedSeries: ISeries[] = [];
  suggestions: ICategories[] = [];
  keepWatching: ISeries[] = [];

  constructor(public trendingsService: TrendingsService, private libraryService: LibrariesService) {}

  ngOnInit(): void {
    this.getTrendingSeries();
    this.getTopRatedSeries();
    this.getSuggestions();
    this.getSeriesInProgress();
  }

  getTrendingSeries() {
    this.trendingsService.getTrendings().subscribe((series: ISeries[]) => {
      this.trendingSeries = series.map((series) => {
        return { ...series, show: false };
      });
    });
  }

  getTopRatedSeries() {
    this.trendingsService.getTrendings().subscribe((series: ISeries[]) => {
      this.topRatedSeries = series.map((series) => {
        return { ...series, show: false };
      });
    });
  }

  getSuggestions(): void {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      const decoded: any = jwt_decode(jwt);
      const userId = decoded.sub;
      this.libraryService.getSuggestions(userId).subscribe((suggestion) => {
        this.suggestions = suggestion;
      });
    }
  }

  getSeriesInProgress(): void {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const decoded: any = jwt_decode(jwt);
      const userId = decoded.sub;
      this.libraryService.getSeriesInProgress(userId).subscribe((progress) => {
        this.keepWatching = progress;
      });
    }
  }
}
