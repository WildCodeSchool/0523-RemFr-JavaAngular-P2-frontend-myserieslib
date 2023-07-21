import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private store: Store, private router: Router, private modalService: ModalService) {}
  redirectToLogin() {
    this.modalService.closeModal();
    this.router.navigate(['/login']);
  }

  redirectToRegister() {
    this.modalService.closeModal();
    this.router.navigate(['/login/register']);
  }
}
