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
  searchNickname = '';

  constructor(public userService: UserService) {}
  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
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

  onSubmit(): void {
    if (this.searchNickname.trim() !== '') {
      this.userService.findUserByNickname(this.searchNickname).subscribe((user: IUser) => {
        this.users = [user];
        this.users[0].pictureUrl = `assets/avatars/ava-${Math.floor(Math.random() * 14) + 1}.png`;
        this.users[0].role = (user.role as any).name || 'user';
        this.totalUsers = 1;
      });
    } else {
      this.loadUsers();
    }
  }

  onUserDeleted(): void {
    this.loadUsers();
  }
}
