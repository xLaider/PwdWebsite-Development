import { User } from './../../models/user/user';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  user: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user;
  }
}
