import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/services/modal/modal.service';
import { selectUser } from 'src/app/services/store/user.reducer';

@Component({
  selector: 'app-nav-pc',
  templateUrl: './nav-pc.component.html',
  styleUrls: ['./nav-pc.component.scss'],
})
export class NavPcComponent implements OnInit {
  constructor(private modalService: ModalService, private router: Router, private store: Store) {}
  isActive = false;
  user: any = {};
  isAdmin = false;
  redirectToLibrary() {
    this.modalService.openModal(() => this.router.navigate(['/library']));
  }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user) => {
      this.user = user;
    });
  }

  onLogoClick(): void {
    if (this.user.role.name === 'admin') {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
