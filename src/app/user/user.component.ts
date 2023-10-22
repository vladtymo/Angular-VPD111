import { Component } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // email: string = 'super@ukr.net';
  user: IUser = {
    id: 1000,
    name: "Luda",
    email: "dudu@gmail.com",
    birthdate: new Date(),
    isAdmin: false
  };
}
