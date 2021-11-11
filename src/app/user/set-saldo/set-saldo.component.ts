import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/_services/_userService/user.service';

@Component({
  selector: 'app-set-saldo',
  templateUrl: './set-saldo.component.html'
})
export class SetSaldoComponent implements OnInit {
  form: any = {};
  user: User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SetSaldoComponent>,
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
        this.snackBar.open('Błąd ustawiania salda', 'Zamknij', { duration: 2000, });
      }
    );
  }

}
