import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { selectUser } from 'src/app/services/store/user.reducer';
import { IEpisode, ILibraries } from 'src/app/utils/interface';

@Component({
  selector: 'app-detail-episodes',
  templateUrl: './detail-episodes.component.html',
  styleUrls: ['./detail-episodes.component.scss'],
})
export class DetailEpisodesComponent implements OnInit {
  @Input() id!: string;

  @Input() isInLibrary!: boolean;

  episodes: IEpisode[] = [];
  seasons: number[] | undefined;
  selectedSeason: number | null = null;

  user: any = {};

  episodesCheckboxesIndex: number[] = [];

  constructor(public serieService: SeriesService, private store: Store, private librariesService: LibrariesService) {}

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

      this.episodes.forEach((episode) => (episode.showCheckbox = false));

      this.store.select(selectUser).subscribe((user) => {
        this.user = user;
        if (this.user?.nickname) {
          this.librariesService.getUserSerieDetails(this.id).subscribe((data: ILibraries) => {
            this.episodesCheckboxesIndex = data.checkedEpisodes || [];
            this.updateShowCheckboxStatus();
          });
        }
      });
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

  updateShowCheckboxStatus() {
    this.episodes.forEach((episode) => {
      const episodeIndex = this.episodes.findIndex(
        (ep) => ep.episodeNumber === episode.episodeNumber && ep.seasonNumber === episode.seasonNumber
      );
      episode.showCheckbox = this.episodesCheckboxesIndex.includes(episodeIndex);
    });
  }

  onCheckboxChange(episode: IEpisode) {
    if (this.user.nickname) {
      const episodeIndex = this.episodes.findIndex(
        (ep) => ep.episodeNumber === episode.episodeNumber && ep.seasonNumber === episode.seasonNumber
      );

      if (episode.showCheckbox) {
        this.episodesCheckboxesIndex.push(episodeIndex);
      } else {
        const indexToRemove = this.episodesCheckboxesIndex.indexOf(episodeIndex);
        if (indexToRemove !== -1) {
          this.episodesCheckboxesIndex.splice(indexToRemove, 1);
        }
      }

      this.librariesService.updateCheckboxesList(this.id, this.episodesCheckboxesIndex).subscribe(() => {
        const allEpCheck = this.episodes.every((ep) => ep.showCheckbox);
        if (allEpCheck) {
          this.librariesService.updateStatus(this.id, 'FINISHED').subscribe();
        } else {
          this.librariesService.updateStatus(this.id, 'IN_PROGRESS').subscribe();
        }
      });
    }
  }
}
