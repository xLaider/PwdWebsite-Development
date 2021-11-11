import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-home-user-info',
  templateUrl: './home-user-info.component.html',
  styleUrls: ['./home-user-info.component.scss']
})
export class HomeUserInfoComponent {
  user: User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.user = data.user;
  }
}
