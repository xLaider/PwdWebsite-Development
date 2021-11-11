import { AuthService } from 'src/app/_services/_authService/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['../authorization/authorization.component.scss']
})
export class RemindPasswordComponent {
  form: any = {};
  shakeIt = false;
  constructor(private authService: AuthService, private snackBar: MatSnackBar) { }

  remind(): void {
    this.authService.GetPasswordRestorationToken(this.form.email).subscribe(
      data => {
        this.snackBar.open('Wysłano prośbę zmiany hasła. Sprawdź pocztę', 'Zamknij', { duration: 2000, });
      },
      err => {
        this.shakeDialog();
        this.snackBar.open('Błąd przypominania hasła', 'Zamknij', { duration: 2000, });
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
