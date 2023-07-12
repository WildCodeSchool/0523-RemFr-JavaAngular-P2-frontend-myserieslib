import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IActors } from 'src/app/utils/interface';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss'],
})
export class CardActorComponent implements OnChanges {
  @Input() actors: IActors[] = [];

  ngOnChanges(): void {
    this.actors.map(
      (actor) => (actor.pictureUrl = 'https://fr.web.img5.acsta.net/c_310_420/pictures/17/07/13/11/23/574012.jpg')
    );
  }
}
