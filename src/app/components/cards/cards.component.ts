import { Component, Input } from '@angular/core';
import { SeriesService } from 'src/app/services/series/series.service';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  constructor(public serieService: SeriesService) {}
  @Input() series: any[] = [];

  toggleShowName(serie: any) {
    serie.show = !serie.show;
    this.serieService.getRating(serie.id).subscribe((rating: number) => {
      serie.rating = rating;
    });
  }
}
