import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.scss'],
})
export class RetrievePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  ngOnInit(): void {
    const token = this.route.snapshot.params['token'];
    const isTokenValid = this.userService.isJWTValid(token);
    if (!isTokenValid) {
      this.router.navigate(['/login']);
    }
  }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
    this.changePasswordForm = this.fb.group(
      {
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

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const password: any = {
        password: this.changePasswordForm.value.password,
      };
      this.userService.changePassword(password);
    }
  }
}
