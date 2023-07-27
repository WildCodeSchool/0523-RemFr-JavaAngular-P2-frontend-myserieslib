import { Component, OnInit } from '@angular/core';
import { IActors } from 'src/app/utils/interface';
import { ActorsService } from 'src/app/services/actors/actors.service';
import { ModalService } from 'src/app/services/modal/modal.service';
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss'],
})
export class ActorsComponent implements OnInit {
  actors: IActors[] = [];
  totalActors = 0;
  searchName = '';

  constructor(public actorsService: ActorsService, private modalService: ModalService) {}
  ngOnInit(): void {
    this.actorsService.getActors().subscribe((actors: IActors[]) => {
      this.actors = actors;
      this.totalActors = actors.length;
    });
  }

  openAddModal(): void {
    this.modalService.openActorModal(() => {
      this.ngOnInit();
    });
  }

  onSubmit(): void {
    if (this.searchName) {
      this.actorsService.searchActor(this.searchName).subscribe((actors: IActors[]) => {
        this.actors = actors;
        this.totalActors = actors.length;
      });
    } else {
      this.ngOnInit();
    }
  }

  onActorUpdate(): void {
    this.ngOnInit();
  }
}
