import { Component, Input } from '@angular/core';
import { IActors } from 'src/app/utils/interface';

@Component({
  selector: 'app-actors-table',
  templateUrl: './actors-table.component.html',
  styleUrls: ['./actors-table.component.scss'],
})
export class ActorsTableComponent {
  @Input() actors: IActors[] = [];

  get half(): number {
    return Math.ceil(this.actors.length / 2);
  }

  openUpdateModal(actor: IActors): void {
    console.log(actor);
  }

  deleteCategory(actor: IActors): void {
    console.log(actor);
  }
}
