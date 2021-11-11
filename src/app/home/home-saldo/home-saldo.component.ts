import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-home-saldo',
  templateUrl: './home-saldo.component.html',
  styleUrls: ['./home-saldo.component.scss']
})
export class HomeSaldoComponent {
  displayedColumns: string[] = ['name', 'email', 'saldo'];
  users: User[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.users = data.users;
  }
}
