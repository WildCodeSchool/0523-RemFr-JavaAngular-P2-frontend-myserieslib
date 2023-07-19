import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  signUpForm = this.fb.group({
    nickname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  isFormValid(): boolean {
    return this.signUpForm.valid;
  }
  onSubmit() {
    if (this.signUpForm.valid) {
      this.userService.register(this.signUpForm.value);
          }
     }
}


// export function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
//   const passwordControl = c.get('password');
//   const confirmPasswordControl = c.get('confirmPassword');

//   if (passwordControl && confirmPasswordControl) {
//     if (passwordControl.pristine || confirmPasswordControl.pristine) {
//       return null;
//     }

//     if (passwordControl.value === confirmPasswordControl.value) {
//       return null;
//     }
//   }
//   return { match: true };
// }
