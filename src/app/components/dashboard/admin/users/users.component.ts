import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/utils/interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  totalUsers = 0;

  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.userService.getUser().subscribe((users: IUser[]) => {
      this.users = users.map((user) => {
        const randomNumber = Math.floor(Math.random() * 14) + 1;
        return {
          ...user,
          pictureUrl: `assets/avatars/ava-${randomNumber}.png`,
        };
      });
      this.totalUsers = this.users.length;
    });
  }
}
