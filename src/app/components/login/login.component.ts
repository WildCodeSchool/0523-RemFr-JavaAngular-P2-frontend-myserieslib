import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  
  isUsernameValid(): boolean {
    const usernameControl = this.loginForm.get('emailOrUsername');
  return !usernameControl?.errors?.['emailOrUsername'];
  }

  isFormValid(): boolean {
    return this.loginForm.valid && this.isUsernameValid();
  }

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
