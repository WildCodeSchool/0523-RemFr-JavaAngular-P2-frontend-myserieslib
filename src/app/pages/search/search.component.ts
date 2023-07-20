import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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
    const { search, filter, year, categories, isCompleted } = props;

    // If no categories are selected, get all series
    if ((!categories || categories.length === 0) && !search) {
      this.serieService.getSeries(search, undefined).subscribe((series: ISeries[]) => {
        this.loadSeriesRatings(series);
        this.filterSeries(series, year, isCompleted, search, filter);
      });
      return;
    }

    // Get series for each selected category
    const seriesObservables = categories.map((categoryId: string) => {
      return this.serieService.getSeries(search, filter, categoryId);
    });

    forkJoin(seriesObservables).subscribe((seriesArray: ISeries[][] | unknown) => {
      if (Array.isArray(seriesArray)) {
        const mergedSeries = seriesArray.reduce((accumulator, currentSeries) => accumulator.concat(currentSeries), []);
        this.loadSeriesRatings(mergedSeries);
        this.filterSeries(mergedSeries, year, isCompleted, search, filter);
      }
    });
  }

  private filterSeries(series: ISeries[], year: string, isCompleted: string, search: string, filter: string) {
    this.series = series.filter((serie) => {
      let isMatch = true;

      // Apply filters based on the provided properties
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
      // Search in the series title
      return serie.name.toLowerCase().includes(search.toLowerCase());
    } else if (filter === 'actor') {
      // Search in the actor names
      return serie.actors.some((actor) => {
        const fullName = `${actor.firstName} ${actor.lastName}`;
        return fullName.toLowerCase().includes(search.toLowerCase());
      });
    } else if (filter === 'producer') {
      // Search in the producer name
      return serie.producer.toLowerCase().includes(search.toLowerCase());
    }

    // If filter is not recognized, consider it a match
    return true;
  }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((series: ISeries[]) => {
      this.series = series.map((series) => {
        return { ...series, show: false };
      });
      this.loadRatings();
    });
  }

  private loadSeriesRatings(series: ISeries[]) {
    series.forEach((serie) => {
      this.serieService.getRating(serie.id).subscribe((rating: number) => {
        serie.rating = rating;
      });
    });
  }

  private loadRatings() {
    this.loadSeriesRatings(this.series);
  }
}
