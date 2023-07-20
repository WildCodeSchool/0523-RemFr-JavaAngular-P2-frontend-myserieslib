import { Component, OnInit } from '@angular/core';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';
import { ISeries } from 'src/app/utils/interface';
import { SafeResourceUrl } from '@angular/platform-browser';

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

  constructor(public trendingsService: TrendingsService) {}

  ngOnInit(): void {
    this.getTrendingSeries();
    this.getTopRatedSeries();
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
}
