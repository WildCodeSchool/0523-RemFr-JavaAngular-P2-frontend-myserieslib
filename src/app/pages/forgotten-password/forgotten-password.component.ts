import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/services/store/user.reducer';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.scss'],
})
export class ForgottenPasswordComponent implements OnInit {
  sendEmailPasswordForm: FormGroup;

  user: any = {};
  constructor(private fb: FormBuilder, private store: Store, private userService: UserService) {
    this.sendEmailPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user) => {
      this.user = user;
    });
    if (this.user.email) {
      this.sendEmailPasswordForm.get('email')?.setValue(this.user.email);
    }
  }

  onSubmit() {
    if (this.sendEmailPasswordForm.valid) {
      this.userService.sendNewPasswordLink(this.sendEmailPasswordForm.value.email);
    }
  }
}
