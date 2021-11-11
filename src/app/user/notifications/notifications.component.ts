import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/_services/_notificationService/notification.service';
import { Notification } from './../../models/notification/notification';
import { Component, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/_services/_userService/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'email', 'saldo'];
  notifications: Notification[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NotificationsComponent>,
    private userService: UserService,
    private notificationService: NotificationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.notifications = data.notifications;
  }

  ngAfterViewInit(): void {
    this.notifications.forEach(element => {
      this.notificationService.MakeRead(element.notificationId).subscribe(
        err => {
          this.snackBar.open('Błąd zmiany powiadomień na przeczytane', 'Zamknij', { duration: 2000, });
        }
      );
    });

  }

  deleteNotification(notiId: number): void {
    this.notificationService.DeleteNotification(notiId).subscribe(
      data => {
        this.dialogRef.close('reload');
      },
      err => {
        this.snackBar.open('Błąd usuwania powiadomienia', 'Zamknij', { duration: 2000, });
      }
    );
  }

  joinHome(notiId: number, homeId: number): void {
    this.userService.JoinHome(this.data.user.userId, homeId).subscribe(
      data => {
        this.deleteNotification(notiId);
        this.router.navigateByUrl('home/dashboard');
        this.dialogRef.close();
      },
      err => {
        this.snackBar.open('Błąd dołączania do domu', 'Zamknij', { duration: 2000, });
      }
    );
  }
}
