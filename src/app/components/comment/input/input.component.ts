import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ILibraries } from 'src/app/utils/interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() userInfo!: ILibraries;
  @Input() serieId!: string;

  @Output() commentUpdated: EventEmitter<string> = new EventEmitter<string>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private librariesService: LibrariesService) {
    this.userForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.librariesService.updateComment(this.serieId, this.userForm.value.message).subscribe();
      this.userForm.reset();
      this.commentUpdated.emit();
    }
  }
}
