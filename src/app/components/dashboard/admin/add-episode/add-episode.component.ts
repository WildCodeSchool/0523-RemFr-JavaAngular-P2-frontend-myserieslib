import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-add-episode',
  templateUrl: './add-episode.component.html',
  styleUrls: ['./add-episode.component.scss'],
})
export class AddEpisodeComponent implements OnInit {
  series: ISeries[] = [];

  episodeForm: FormGroup;

  constructor(
    private seriesService: SeriesService,
    private fb: FormBuilder,
    private episodesService: EpisodesService,
    private route: ActivatedRoute
  ) {
    this.episodeForm = this.fb.group({
      serieId: ['', Validators.required],
      title: ['Pilote', Validators.required],
      seasonNumber: [1, Validators.required],
      episodeNumber: [1, Validators.required],
      releaseDate: ['2004-10-04', Validators.required],
      thumbnail: [
        'https://m.media-amazon.com/images/M/MV5BODIwNWIwMWYtNjRjNC00NTU0LThlZTgtNmFjNmNkMTBmMzk2XkEyXkFqcGdeQXVyNTQ0NDExMjQ@._V1_.jpg',
        Validators.required,
      ],
      description: [
        `Mary Alice Young mène une vie paisible dans sa maison de Wisteria Lane, entourée d'un époux et d'un fils qui l'aiment. Tout semble parfait ! Pourtant un jour, qui semble comme les autres, elle met fin à ses jours... laissant toute la communauté dans le trouble. Ses amies et voisines ne comprennent pas son acte désespéré...`,
        Validators.required,
      ],
    });
  }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((res) => {
      this.series = res;
      this.series.sort((a, b) => a.name.localeCompare(b.name));
    });
    if (this.id) {
      this.episodesService.getEpisodeById(this.id).subscribe((episode) => {
        this.episodeForm.setValue({
          serieId: episode.serie.id,
          title: episode.title,
          seasonNumber: episode.seasonNumber,
          episodeNumber: episode.episodeNumber,
          releaseDate: episode.releaseDate,
          thumbnail: episode.thumbnail,
          description: episode.description,
        });
      });
    }
  }

  onSubmit(): void {
    if (this.episodeForm.valid) {
      if (this.id) {
        const episodeData = this.episodeForm.value;
        this.episodesService.updateEpisode(episodeData, this.id);
        this.episodeForm.reset();
      } else {
        const episodeData = this.episodeForm.value;
        const serieId = episodeData.serieId;
        delete episodeData.serieId;
        this.episodesService.createEpisode(episodeData, serieId);
        this.episodeForm.reset();
      }
    }
  }
}
