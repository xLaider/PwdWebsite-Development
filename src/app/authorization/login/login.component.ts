import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../_services/_authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authorization/authorization.component.scss']
})
export class LoginComponent implements OnInit {
  shakeIt = false;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.authService.getUser()) {
      this.isLoggedIn = true;
      this.RedirectToDashboard();
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.authService.setUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.RedirectToDashboard();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.shakeDialog();
        this.snackBar.open('Nie można zalogować', 'Zamknij', { duration: 2000, });
      }
    );
  }



  RedirectToDashboard(): void {
    this.router.navigateByUrl(this.returnUrl);
  }

  shakeDialog(): void {
    this.shakeIt = true;
    setTimeout((arg) => {
      this.shakeIt = false;
    },
      600);
  }

}
