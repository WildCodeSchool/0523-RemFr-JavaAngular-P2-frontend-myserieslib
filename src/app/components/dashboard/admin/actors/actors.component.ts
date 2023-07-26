import { Component, OnInit } from '@angular/core';
import { IActors } from 'src/app/utils/interface';
import { ActorsService } from 'src/app/services/actors/actors.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  actors: IActors[] = [];
  totalActors = 0;

  constructor(public actorsService: ActorsService) {}
  ngOnInit(): void {
    this.actorsService.getActors().subscribe((actors: IActors[]) => {
      this.actors = actors;
      console.log(this.actors);
      this.totalActors = actors.length;
    });
  }
}
