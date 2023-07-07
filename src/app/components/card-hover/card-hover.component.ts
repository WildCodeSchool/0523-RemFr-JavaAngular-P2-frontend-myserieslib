import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss'],
})
export class CardHoverComponent {
  @Input() card: Card | undefined;

  isClicked = false;

  toggleCard() {
    this.isClicked = !this.isClicked;
  }
}
