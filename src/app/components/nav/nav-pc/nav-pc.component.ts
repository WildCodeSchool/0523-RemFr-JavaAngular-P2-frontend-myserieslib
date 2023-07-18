import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-nav-pc',
  templateUrl: './nav-pc.component.html',
  styleUrls: ['./nav-pc.component.scss'],
})
export class NavPcComponent {
  constructor(private modalService: ModalService, private router: Router) {}
  isActive = false;

  redirectToLibrary() {
    this.modalService.openModal(() => this.router.navigate(['/library']));
  }
}
