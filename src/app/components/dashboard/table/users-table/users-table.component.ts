import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/utils/interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() users: IUser[] = [];
  @Output() updateUser = new EventEmitter<IUser>();
  constructor(private userService: UserService) {}

  deleteUser(user: IUser): void {
    this.userService.deleteUser(user.id).subscribe(
      () => {
        this.updateUser.emit();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
