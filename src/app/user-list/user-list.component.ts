import { Component } from '@angular/core';
import { IUser, USERS } from '../user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: IUser[] = USERS;

  clearList(): void {
    this.users = [];
  }

  addUser(user: IUser): void {
    this.users.push(user);
  }
}
