import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IActors } from 'src/app/utils/interface';

@Component({
  selector: 'app-card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss'],
})
export class CardActorComponent {
  @Input() actors: IActors[] = [];
}
