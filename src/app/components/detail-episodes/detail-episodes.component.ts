import { Component, Input, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series/series.service';
import { IEpisode } from 'src/app/utils/interface';

@Component({
  selector: 'app-detail-episodes',
  templateUrl: './detail-episodes.component.html',
  styleUrls: ['./detail-episodes.component.scss'],
})
export class DetailEpisodesComponent implements OnInit {
  @Input()
  id!: string;

  episodes: IEpisode[] = [];
  seasons: number[] | undefined;
  selectedSeason: number | null = null;

  constructor(public serieService: SeriesService) {}

  ngOnInit(): void {
    this.serieService.getEpisodes(this.id).subscribe((data) => {
      this.episodes = data.map((item: IEpisode) => {
        return { ...item };
      });
      this.episodes.sort((a: IEpisode, b: IEpisode) => {
        if (a.seasonNumber === b.seasonNumber) {
          return a.episodeNumber - b.episodeNumber;
        } else {
          return a.seasonNumber - b.seasonNumber;
        }
      });
      const numbers = data.map((item: IEpisode) => item.seasonNumber);
      this.seasons = Array.from(new Set<number>(numbers)).sort();
    });
    this.selectedSeason = 1;
  }

  seasonSelect(season: number) {
    this.selectedSeason = season;
  }

  getFilteredEpisodes() {
    if (this.selectedSeason) {
      return this.episodes.filter((episode: IEpisode) => episode.seasonNumber == this.selectedSeason);
    } else {
      return this.episodes;
    }
  }
}
