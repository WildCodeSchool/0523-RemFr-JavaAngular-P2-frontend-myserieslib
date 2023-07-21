import { Component, Input, OnChanges, Output } from '@angular/core';
import { ILibraries, ISeries } from 'src/app/utils/interface';
import { SeriesService } from 'src/app/services/series/series.service';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
@Component({
  selector: 'app-detail-informations',
  templateUrl: './detail-informations.component.html',
  styleUrls: ['./detail-informations.component.scss'],
})
export class DetailInformationsComponent implements OnChanges {
  @Input() serie!: ISeries;

  userInfo!: ILibraries;

  constructor(public serieService: SeriesService, public librariesService: LibrariesService) {}

  ngOnChanges(): void {
    this.serieService.getRating(this.serie.id).subscribe((rating: number) => {
      this.serie.rating = rating;
    });
    this.librariesService.getUserSerieDetails(this.serie.id).subscribe((data: ILibraries) => {
      this.userInfo = data;
    });
  }
}
