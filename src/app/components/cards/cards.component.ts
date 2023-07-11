import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series/series.service';
import { ISeries } from 'src/app/utils/interface';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  constructor(public serieService: SeriesService, public router: Router) {}
  @Input() series: ISeries[] = [];

  toggleShowName(serie: ISeries) {
    serie.show = !serie.show;
    this.serieService.getRating(serie.id).subscribe((rating: number) => {
      serie.rating = rating;
    });
  }

  redirectToDetail(serie: ISeries) {
    this.router.navigate(['/detail', serie.id]);
  }
}
