import { Component, OnInit } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { forkJoin } from 'rxjs';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.scss'],
})
export class SerieListComponent implements OnInit {
  series: ISeries[] = [];
  totalSeries = 0;

  constructor(public serieService: SeriesService) {}

  getSeries(props: any) {
    const { search, filter, year, categories, isCompleted } = props;

    if ((!categories || categories.length === 0) && !search) {
      this.serieService.getSeries(search, undefined).subscribe((series: ISeries[]) => {
        this.filterSeries(series, year, isCompleted, search, filter);
      });
      return;
    }

    const seriesObservables = categories.map((categoryId: string) => {
      return this.serieService.getSeries(search, filter, categoryId);
    });

    forkJoin(seriesObservables).subscribe((seriesArray: ISeries[][] | unknown) => {
      if (Array.isArray(seriesArray)) {
        const mergedSeries = seriesArray.reduce((accumulator, currentSeries) => accumulator.concat(currentSeries), []);
        this.filterSeries(mergedSeries, year, isCompleted, search, filter);
      }
    });
  }

  private filterSeries(series: ISeries[], year: string, isCompleted: string, search: string, filter: string) {
    this.series = series.filter((serie) => {
      let isMatch = true;

      if (year && year !== '2020') {
        const releaseYear = new Date(serie.releaseDate).getFullYear();
        if (year === '1700s' && releaseYear >= 1970) {
          isMatch = false;
        } else if (year === '1900s' && (releaseYear < 1970 || releaseYear > 1980)) {
          isMatch = false;
        } else if (year === '2000s' && releaseYear < 1990) {
          isMatch = false;
        }
      }

      if (isCompleted !== '') {
        if (isCompleted === 'true' && !serie.isCompleted) {
          isMatch = false;
        } else if (isCompleted === 'false' && serie.isCompleted) {
          isMatch = false;
        }
      }

      if (search && filter) {
        isMatch = this.searchNameInSeries(serie, search, filter);
      }

      return isMatch;
    });
  }

  private searchNameInSeries(serie: ISeries, search: string, filter: string): boolean {
    if (filter === 'title') {
      return serie.name.toLowerCase().includes(search.toLowerCase());
    } else if (filter === 'actor') {
      return serie.actors.some((actor) => {
        const fullName = `${actor.firstName} ${actor.lastName}`;
        return fullName.toLowerCase().includes(search.toLowerCase());
      });
    } else if (filter === 'producer') {
      return serie.producer.toLowerCase().includes(search.toLowerCase());
    }

    return true;
  }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((series: ISeries[]) => {
      this.series = series.map((series) => {
        series.releaseDate = new Date(series.releaseDate).getFullYear().toString();
        return { ...series, show: false };
      });
      this.totalSeries = this.series.length;
    });
  }
}
