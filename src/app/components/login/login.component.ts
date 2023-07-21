import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserService } from 'src/app/services/user/user.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  signIn = new FormControl(false);

  ngOnInit(): void {
    const register = this.route.snapshot.paramMap.get('register');
    if (register) {
      this.signIn.setValue(true);
    }
  }
  isUsernameValid(): boolean {
    const usernameControl = this.loginForm.get('emailOrUsername');
    return !usernameControl?.errors?.['emailOrUsername'];
  }

  isFormValid(): boolean {
    return this.loginForm.valid && this.isUsernameValid();
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  onSubmit() {
    this.userService.login(this.loginForm.value);
  }
}
