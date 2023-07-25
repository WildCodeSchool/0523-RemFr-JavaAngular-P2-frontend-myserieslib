import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal/modal.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent {
  constructor(private fb: FormBuilder, private userService: UserService, private modalService: ModalService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  loginForm: FormGroup;

  onSubmit() {
    if (this.loginForm.valid) {
      this.userService.confirmLogin(this.loginForm.value, this.modalService.closeModal());
    }
  }
}
