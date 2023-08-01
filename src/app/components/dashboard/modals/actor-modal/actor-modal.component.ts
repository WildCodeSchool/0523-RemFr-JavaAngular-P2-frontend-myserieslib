import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IActors } from 'src/app/utils/interface';
import { ActorsService } from 'src/app/services/actors/actors.service';

@Component({
  selector: 'app-actor-modal',
  templateUrl: './actor-modal.component.html',
  styleUrls: ['./actor-modal.component.scss'],
})
export class ActorModalComponent {
  firstNameActor = 'Marcia';
  lastNameActor = 'Cross';
  imageActor = 'https://fr.web.img3.acsta.net/pictures/16/07/21/10/01/323860.jpg';
  constructor(
    public actorsService: ActorsService,
    private dialogRef: MatDialogRef<ActorModalComponent>,
    @Inject(MAT_DIALOG_DATA) public actor?: IActors | null
  ) {
    this.firstNameActor = actor ? actor.firstName : 'Marcia';
    this.lastNameActor = actor ? actor.lastName : 'Cross';
  }

  submitActor(): void {
    if (this.actor) {
      const newActor: IActors = {
        id: this.actor.id,
        firstName: this.firstNameActor,
        lastName: this.lastNameActor,
        pictureUrl: this.imageActor,
      };
      this.actorsService.updateActor(newActor).subscribe(() => {
        this.dialogRef.close(newActor);
      });
    } else {
      const newActor = {
        id: '',
        firstName: this.firstNameActor,
        lastName: this.lastNameActor,
        pictureUrl: this.imageActor,
      };
      this.actorsService.addActor(newActor).subscribe(() => {
        this.dialogRef.close(newActor);
      });
    }
  }
}
