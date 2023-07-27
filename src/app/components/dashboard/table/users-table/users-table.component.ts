import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/utils/interface';
import { UserService } from 'src/app/services/user/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input() users: IUser[] = [];
  @Output() updateUser = new EventEmitter<IUser>();
  constructor(private userService: UserService, private toastr: ToastrService) {}

  deleteUser(user: IUser): void {
    this.userService.deleteUser(user.id).subscribe(
      () => {
        this.updateUser.emit();
        this.toastr.success('User deleted successfully', 'Success');
      },
      (error) => {
        this.toastr.error(error.error.message, 'Error');
      }
    );
  }
}
