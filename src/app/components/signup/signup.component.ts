import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.signUpForm = this.fb.group({
      nickname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]+$'),
        ],
      ],
      confirmPassword: ['', [Validators.required]],
    }, { validators: passwordMatcher });
  }

  isFormValid(): boolean {
    return this.signUpForm.valid;
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.userService.register(this.signUpForm.value);
    }
  }
}

function passwordMatcher(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
}
