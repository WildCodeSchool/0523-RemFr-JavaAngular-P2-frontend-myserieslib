import { Component, Input } from '@angular/core';
import { ILibraries } from 'src/app/utils/interface';

@Component({
  selector: 'app-card-hover',
  templateUrl: './card-hover.component.html',
  styleUrls: ['./card-hover.component.scss'],
})
export class CardHoverComponent {
  @Input() card: ILibraries | undefined;

  isClicked = false;

  toggleCard() {
    this.isClicked = !this.isClicked;
    console.log(this.card);
  }
}
