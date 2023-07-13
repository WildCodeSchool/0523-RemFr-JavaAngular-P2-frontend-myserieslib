import { Component, Input } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swiper-cards',
  templateUrl: './swiper-cards.component.html',
  styleUrls: ['./swiper-cards.component.scss'],
})
export class SwiperCardsComponent {
  constructor(public router: Router) {}
  @Input() title = '';
  @Input() series: ISeries[] = [];

  redirectToDetail(serie: ISeries) {
    console.log(serie);
    this.router.navigate(['/detail', serie.id]);
  }

  options = {
    type: 'loop',
    perPage: 5,
    keyboard: false,
    padding: '5rem',
    breakpoints: {
      640: {
        perPage: 2,
        padding: '2rem',
      },
    },
  };
}
