import { Component, Input, OnChanges } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { SeriesService } from 'src/app/services/series/series.service';
@Component({
  selector: 'app-detail-informations',
  templateUrl: './detail-informations.component.html',
  styleUrls: ['./detail-informations.component.scss'],
})
export class DetailInformationsComponent implements OnChanges {
  @Input() serie!: ISeries;

  constructor(public serieService: SeriesService) {}

  ngOnChanges(): void {
    this.serieService.getRating(this.serie.id).subscribe((rating: number) => {
      this.serie.rating = rating;
    });
  }
}
