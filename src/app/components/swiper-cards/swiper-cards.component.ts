import { Component, Input, OnChanges } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swiper-cards',
  templateUrl: './swiper-cards.component.html',
  styleUrls: ['./swiper-cards.component.scss'],
})
export class SwiperCardsComponent implements OnChanges {
  constructor(public router: Router) {}
  @Input() title = '';
  @Input() series: ISeries[] = [];

  redirectToDetail(serie: ISeries) {
    this.router.navigate(['/detail', serie.id]);
  }

  ngOnChanges(): void {
    if (this.series) {
      this.series = this.series.map((serie) => {
        const yearReleased = new Date(serie.releaseDate).getFullYear().toString();
        const serieClone = { ...serie };
        serieClone.releaseDate = yearReleased;
        return serieClone;
      });
    }
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
