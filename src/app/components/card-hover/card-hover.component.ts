import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ILibraries, ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss'],
})
export class CardHoverComponent {
  @Input() card: ILibraries | undefined;

  isClicked = false;

  constructor(private router: Router) {}

  toggleCard() {
    this.isClicked = !this.isClicked;
  }

  redirectToDetail(serie: ISeries) {
    this.router.navigate(['/detail', serie.id]);
  }
}
