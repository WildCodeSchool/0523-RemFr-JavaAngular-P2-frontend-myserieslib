import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ModalService } from 'src/app/services/modal/modal.service';
import { selectUser } from 'src/app/services/store/user.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private store: Store, private router: Router, private modalService: ModalService) {}

  user: any = {};
  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user) => {
      this.user = { nickname: user.nickname, email: user.email, pictureUrl: user.pictureUrl };
      if (!user.email) {
        this.router.navigate(['/login']);
      }
    });
  }

  updateProfile() {
    this.modalService.openLoginModal();
  }
}
