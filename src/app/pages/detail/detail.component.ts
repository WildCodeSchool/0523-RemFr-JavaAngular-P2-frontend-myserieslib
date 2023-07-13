import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from 'src/app/services/series/series.service';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(public serieService: SeriesService, public route: ActivatedRoute, private sanitizer: DomSanitizer) {}
  id = this.route.snapshot.paramMap.get('id') || '';

  informationsSelected = true;

  serie: ISeries | undefined;

  showInformations() {
    this.informationsSelected = true;
  }

  showEpisodes() {
    this.informationsSelected = false;
  }

  ngOnInit(): void {
    this.serieService.getSerieById(this.id).subscribe((data) => {
      this.serie = data;
      this.serie.trailerSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.serie.trailerURL);
    });
  }
}
