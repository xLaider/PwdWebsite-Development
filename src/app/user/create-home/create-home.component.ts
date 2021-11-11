import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from 'src/app/_services/_homeService/home.service';
import { UserService } from 'src/app/_services/_userService/user.service';

@Component({
  selector: 'app-create-home',
  templateUrl: './create-home.component.html'
})
export class CreateHomeComponent {
  form: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CreateHomeComponent>,
    private homeService: HomeService,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  onSubmit(): void {
    this.homeService.CreateHome(this.form).subscribe(result => {
      this.userService.JoinHome(this.data.user.userId, result.homeId).subscribe(
        data => {
          this.router.navigateByUrl('home/dashboard');
          this.dialogRef.close();
        },
        err => {
          this.snackBar.open('Błąd tworzenia domu', 'Zamknij', { duration: 2000, });
        }
      );
    }
    );


  }

}
