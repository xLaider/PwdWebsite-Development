import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class SaldoComponent {
  saldo = 0;
  // tslint:disable-next-line: variable-name
  private _user: User[];



  @Input() set user(value: User[]) {
    this._user = value;
    if (this._user) {
      this._user.forEach(element => {
        this.saldo += element.saldo;
      });
    }
  }

  get user(): User[] {
    return this._user;
  }



}
