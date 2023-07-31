import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series/series.service';
import { ISeries, IEpisode } from 'src/app/utils/interface';

@Component({
  selector: 'app-serie-table',
  templateUrl: './serie-table.component.html',
  styleUrls: ['./serie-table.component.scss'],
})
export class SerieTableComponent {
  constructor(private router: Router, private serieService: SeriesService) {}
  @Input() series: ISeries[] = [];

  editSerie(serie: ISeries): void {
    this.router.navigate(['/dashboard', { outlets: { dashboardOutlet: ['serie', serie.id] } }]);
  }

  deleteSerie(serie: ISeries): void {
    this.serieService.deleteSeries(serie.id);
  }
}
