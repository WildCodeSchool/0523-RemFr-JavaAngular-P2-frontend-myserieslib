import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-keep-watching',
  templateUrl: './keep-watching.component.html',
  styleUrls: ['./keep-watching.component.scss']
})
export class KeepWatchingComponent {

  private _seriesInProgress: ISeries[] = [];
  
  @Input() set seriesInProgress(series: ISeries[]) {
  this._seriesInProgress = series;
  this.options = {
    type: 'loop',
    gap: '2rem',
    perPage: Math.min(this._seriesInProgress.length, 5),
    keyboard: false,
    padding: '5rem',
    breakpoints: {
      640: {
        perPage: Math.min(this._seriesInProgress.length, 2),
        padding: '2rem',
        gap: '1rem',
      },
    },
  };
}

get seriesInProgress(): ISeries[] {
  return this._seriesInProgress;
}
  constructor(private router: Router) {}

  redirectToDetail(serie: ISeries) {
    this.router.navigate(['/detail', serie.id]);
  }
  options = {
    type: 'loop',
    gap: '2rem',
    perPage: 5,
    keyboard: false,
    padding: '5rem',
    breakpoints: {
      640: {
        perPage: 2,
        padding: '2rem',
        gap: '1rem',
      },
    },
  };
}
