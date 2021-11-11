import { UserService } from './../../_services/_userService/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-expense-limit',
  templateUrl: './expense-limit.component.html'
})
export class ExpenseLimitComponent implements OnInit {
  form: any = {};
  user: User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ExpenseLimitComponent>,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user = this.data.user;
  }

  onSubmit(): void{
    this.userService.UpdateUser(this.user).subscribe(
      data => {
        this.dialogRef.close('reload');
      },
      err => {
        this.snackBar.open('Błąd zmiany limitu', 'Zamknij', { duration: 2000, });
      }
    );
  }

}
