import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSignup() {
    if (this.signupForm.valid) {
      const email = this.signupForm.value.email;
      const password = this.signupForm.value.password;
      const confirmPassword = this.signupForm.value.confirmPassword;
    }
  }
}
