import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IHistory, ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['./history-card.component.scss'],
})
export class HistoryCardComponent {
  @Input() card: IHistory | undefined;

  constructor(private router: Router) {}

  redirectToDetail() {
    this.router.navigate(['/detail', this.card?.episode.serie.id]);
  }
}
