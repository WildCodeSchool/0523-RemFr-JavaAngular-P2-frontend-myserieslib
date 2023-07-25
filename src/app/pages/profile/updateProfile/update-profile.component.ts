import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { UserService } from 'src/app/services/user/user.service';
import { selectUser } from 'src/app/services/store/user.reducer';
import { IRegister } from 'src/app/utils/interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss'],
})
export class UpdateProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    this.profileForm = this.fb.group(
      {
        nickname: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        pictureUrl: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]+$'),
          ],
        ],
        confirmPassword: [''],
      },
      { validators: this.passwordMatcher }
    );
  }

  passwordMatcher(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true };
  }

  user: any = {};

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user) => {
      this.user = user;
      this.profileForm.patchValue({
        nickname: user.nickname,
        email: user.email,
        pictureUrl: user.pictureUrl,
      });
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      const user: any = {
        nickname: this.profileForm.value.nickname,
        email: this.profileForm.value.email,
        pictureUrl: this.profileForm.value.pictureUrl,
        password: this.profileForm.value.password,
      };
      this.userService.updateUser(user);
      this.toastr.success('Changement réussi !');
    }
  }
}
