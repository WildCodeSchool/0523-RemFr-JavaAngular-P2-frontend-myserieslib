import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { selectUser } from 'src/app/services/store/user.reducer';
import { ISeries, IUser, UserJWT } from 'src/app/utils/interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    public serieService: SeriesService,
    public route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private librariesService: LibrariesService,
    private store: Store
  ) {}
  id = this.route.snapshot.paramMap.get('id') || '';

  informationsSelected = true;

  serie: ISeries | undefined;

  userConnected = false;

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
    const user$: Observable<IUser> = this.store.select(selectUser);
    user$.subscribe((user: UserJWT) => {
      if (user.JWT) {
        this.userConnected = !this.userConnected;
      }
    });
  }

  addSeries(): void {
    this.librariesService.addSeries(this.id).subscribe();
  }
}
