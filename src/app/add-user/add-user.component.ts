import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IUser } from '../user/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

creationForm = this.fb.group({
  name: [''],
  email: [''],
  birthdate: [new Date()],
  isAdmin: [false]
});

@Output()
createEvent = new EventEmitter<IUser>();

constructor(private fb: FormBuilder) { }

  onSubmit(): void {

    // get new user
    const user = this.creationForm.value as IUser;
    console.log(user);

    this.createEvent.emit(user);
  }
}
