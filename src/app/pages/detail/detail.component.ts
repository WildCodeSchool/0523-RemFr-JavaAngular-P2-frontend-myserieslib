import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { selectUser } from 'src/app/services/store/user.reducer';
import { ILibraries, ISeries } from 'src/app/utils/interface';

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
    private store: Store,
    private toastr: ToastrService
  ) {}
  id = this.route.snapshot.paramMap.get('id') || '';

  informationsSelected = true;
  serie!: ISeries;
  user: any = {};
  userInfo!: ILibraries;

  isInLibrary = false;

  userData!: ILibraries[];

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
    this.librariesService.getLibraries().subscribe((data) => {
      this.userData = data;
      this.isInLibrary = this.userData.some((library) => library.serie.id === this.serie.id);
    });
    this.store.select(selectUser).subscribe((user) => (this.user = user));
    this.librariesService.getUserSerieDetails(this.serie.id).subscribe((data: ILibraries) => {
      this.userInfo = data;
    });
  }

  addSeries(): void {
    this.librariesService.addSeries(this.id).subscribe();
    this.isInLibrary = true;
    this.toastr.success('Ajout de ' + this.serie.name + ' à la bibliothèque');
  }
}
