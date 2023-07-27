import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { IEpisode, ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: IEpisode[] = [];
  totalEpisodes = 0;
  series: ISeries[] = [];

  selectedSerie: string | null = null;

  constructor(private episodesService: EpisodesService, private seriesService: SeriesService) {}

  getEpisode(): void {
    if (this.selectedSerie === null || this.selectedSerie === 'all series') {
      this.episodesService.getAllEpisodes().subscribe((res) => {
        this.episodes = res;
        this.totalEpisodes = this.episodes.length;
      });
    } else {
      this.episodesService.getAllEpisodesBySerie(this.selectedSerie).subscribe((res) => {
        this.episodes = res;
        this.episodes.sort((a, b) => {
          if (a.seasonNumber !== b.seasonNumber) {
            return a.seasonNumber - b.seasonNumber;
          } else {
            return a.episodeNumber - b.episodeNumber;
          }
        });
        this.totalEpisodes = this.episodes.length;
      });
    }
  }

  ngOnInit(): void {
    this.getEpisode();
    this.episodesService.getAllEpisodes().subscribe((res) => {
      this.episodes = res;
      this.totalEpisodes = this.episodes.length;
    });
    this.seriesService.getSeries().subscribe((res) => {
      this.series = res;
      this.series.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  getFilteredEpisodes(): void {
    this.getEpisode();
  }

  onDeleteEpisode(episodeId: string): void {
    this.episodes = this.episodes.filter((episode) => episode.id !== episodeId);
    this.totalEpisodes = this.episodes.length;
  }
}
