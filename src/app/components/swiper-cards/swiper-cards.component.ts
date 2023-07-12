import { Component, Input } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-swiper-cards',
  templateUrl: './swiper-cards.component.html',
  styleUrls: ['./swiper-cards.component.scss'],
})
export class SwiperCardsComponent {
  @Input() title = '';
  @Input() series: ISeries[] = [];

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
