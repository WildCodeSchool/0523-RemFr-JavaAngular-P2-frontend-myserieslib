import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IActors } from 'src/app/utils/interface';
import { ActorsService } from 'src/app/services/actors/actors.service';
import { ModalService } from 'src/app/services/modal/modal.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actors-table',
  templateUrl: './actors-table.component.html',
  styleUrls: ['./actors-table.component.scss'],
})
export class ActorsTableComponent {
  @Input() actors: IActors[] = [];
  @Output() updateActorEvent = new EventEmitter<IActors>();

  constructor(
    private modalService: ModalService,
    private actorsService: ActorsService,
    private toastr: ToastrService
  ) {}

  get half(): number {
    return Math.ceil(this.actors.length / 2);
  }

  openUpdateModal(actor: IActors): void {
    this.modalService.openActorModal(() => {
      this.updateActorEvent.emit();
      this.toastr.success('Actor updated successfully', 'Success');
    }, actor);
  }

  deleteCategory(actor: IActors): void {
    this.actorsService.deleteActor(actor.id).subscribe(() => {
      this.updateActorEvent.emit();
      this.toastr.success('Actor deleted successfully', 'Success');
    });
  }
}
