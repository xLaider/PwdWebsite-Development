import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/_services/_userService/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html'
})
export class EditUserComponent implements OnInit {
  form: any = {};
  user: User;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditUserComponent>,
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
        this.snackBar.open('Błąd edycji użytkownika', 'Zamknij', { duration: 2000, });
      }
    );
  }

}
