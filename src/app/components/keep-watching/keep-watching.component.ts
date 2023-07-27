import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-keep-watching',
  templateUrl: './keep-watching.component.html',
  styleUrls: ['./keep-watching.component.scss']
})
export class KeepWatchingComponent {

  @Input() seriesInProgress: ISeries[] = [];

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
