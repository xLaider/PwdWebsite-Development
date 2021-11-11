import { Home } from 'src/app/models/home/home';
import { HomeService } from 'src/app/_services/_homeService/home.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/_services/_notificationService/notification.service';

@Component({
  selector: 'app-add-to-home',
  templateUrl: './add-to-home.component.html'
})
export class AddToHomeComponent implements OnInit {
  home: Home;
  form: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddToHomeComponent>,
    private notificationService: NotificationService,
    private homeService: HomeService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.homeService.GetHomeById(this.data.homeId).subscribe(result => {
      this.home = result;
    });
  }

  onSubmit(): void {
    this.form['homeId'] = this.data.homeId;
    this.form['text'] =
      'Zostałeś zaproszony przez ' + this.data.sender + ' do domu: ' + this.home.homeName;
    this.form['notificationDate'] = new Date();
    this.form['read'] = false;
    this.form['sender'] = this.data.sender;
    this.notificationService.SendNotification(this.form).subscribe(
      data => {
        this.dialogRef.close('reload');
      },
      err => {
        this.snackBar.open('Błąd zapraszania do domu', 'Zamknij', { duration: 2000, });
      }
    );
  }
}
