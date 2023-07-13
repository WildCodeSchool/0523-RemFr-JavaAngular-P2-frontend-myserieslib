import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { SeriesService } from 'src/app/services/series/series.service';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  series: ISeries[] = [];

  constructor(public serieService: SeriesService) {}

  getSeries(props: any) {
    const { search, filter, categories } = props;
    this.serieService.getSeries(search, filter, categories).subscribe((series: ISeries[]) => {
      this.series = series.map((series) => {
        return { ...series, show: false };
      });
    });
  }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((series: ISeries[]) => {
      this.series = series.map((series) => {
        return { ...series, show: false };
      });
    });
  }
}
