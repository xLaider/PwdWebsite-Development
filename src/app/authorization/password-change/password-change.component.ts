import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['../authorization/authorization.component.scss']
})
export class PasswordChangeComponent{

  form: any = {};

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  onSubmit(): void {
    this.authService.ChangePassword(this.route.snapshot.params.token, this.form.password).subscribe(
      data => {
        this.snackBar.open('Udało się zmienić hasło.', 'Zamknij', { duration: 2000, });
      },
      err => {
        this.snackBar.open('Błąd przy próbie zmiany hasła', 'Zamknij', { duration: 2000, });
      }
    );
  }

}
