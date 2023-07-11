import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      console.log('Valid');
    } else {
      console.log('Invalid');
    }
  }

}
