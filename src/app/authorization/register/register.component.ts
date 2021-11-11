import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../_services/_userService/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../authorization/authorization.component.scss']
})
export class RegisterComponent {
  shakeIt = false;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  returnUrl: string;

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  register(): void {
    this.userService.RegisterUser(this.form).subscribe(
      data => {
        this.snackBar.open('Pomyślnie zarejestrowano. Potwierdź e-mail', 'Zamknij', { duration: 2000, });
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.snackBar.open('Błąd rejestracji', 'Zamknij', { duration: 2000, });
      }
    );
  }

  shakeDialog(): void {
    this.shakeIt = true;
    setTimeout((arg) => {
      this.shakeIt = false;
    },
      600);
  }


}
