import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series/series.service';
import { IEpisode, ILibraries, ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss'],
})
export class CardHoverComponent implements OnInit {
  @Input() card: ILibraries | undefined;
  @Input() episodes: any;

  isClicked = false;

  progress = 0;

  constructor(private router: Router, private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getEpisodes(this.card!.serie.id).subscribe((res) => {
      this.episodes = res;
      this.progress = Math.round((this.card!.checkedEpisodes.length / this.episodes.length) * 100);
    });
  }

  toggleCard() {
    this.isClicked = !this.isClicked;
  }

  redirectToDetail(serie: ISeries) {
    this.router.navigate(['/detail', serie.id]);
  }
}
