import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { IRegister } from 'src/app/utils/interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.signUpForm = this.fb.group(
      {
        nickname: ['LudivineSagnol', [Validators.required]],
        email: ['sagnol.ludivine@gmail.com', [Validators.required, Validators.email]],
        password: [
          'Test1234*',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]+$'),
          ],
        ],
        confirmPassword: ['Test1234*', [Validators.required]],
      },
      { validators: passwordMatcher }
    );
  }

  isFormValid(): boolean {
    return this.signUpForm.valid;
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const user: IRegister = {
        nickname: this.signUpForm.value.nickname,
        email: this.signUpForm.value.email,
        password: this.signUpForm.value.password,
      };
      this.userService.register(user);
      this.toastr.success('Inscription réussie !');
    }
  }
}

function passwordMatcher(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? null : { passwordMismatch: true };
}
