import { Component, Input } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // email: string = 'super@ukr.net';

  @Input() // allows to put data from parent component
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    birthdate: new Date(),
    isAdmin: false
  };
}
