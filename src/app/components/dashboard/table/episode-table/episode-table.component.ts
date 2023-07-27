import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';
import { IEpisode } from 'src/app/utils/interface';

@Component({
  selector: 'app-episode-table',
  templateUrl: './episode-table.component.html',
  styleUrls: ['./episode-table.component.scss'],
})
export class EpisodeTableComponent {
  @Input() episodes: IEpisode[] = [];

  @Output() episodeDeleted: EventEmitter<string> = new EventEmitter<string>();

  constructor(private episodesService: EpisodesService, private router: Router) {}

  editEpisode(episode: IEpisode): void {
    this.router.navigate(['/dashboard', { outlets: { dashboardOutlet: ['episode', episode] } }]);
  }

  deleteEp(episodeId: string): void {
    this.episodesService.deleteSeries(episodeId);
    this.episodeDeleted.emit(episodeId);
  }
}
