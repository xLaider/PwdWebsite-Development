import { NotificationsComponent } from './../notifications/notifications.component';
import { Notification } from './../../models/notification/notification';
import { NotificationService } from 'src/app/_services/_notificationService/notification.service';
import { CreateHomeComponent } from './../create-home/create-home.component';
import { SetSaldoComponent } from './../set-saldo/set-saldo.component';
import { UserInfoComponent } from './../user-info/user-info.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expense } from 'src/app/models/expense/expense';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { AddIncomeComponent } from '../add-income/add-income.component';
import { ExpenseLimitComponent } from '../expense-limit/expense-limit.component';
import { Home } from 'src/app/models/home/home';
import { EditUserComponent } from '../edit-user/edit-user.component';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../dashboardStyles.scss']
})
export class UserDashboardComponent implements OnInit {


  notiCount = 0;
  userId: number;
  user: User[] = new Array<User>();
  expenses: Expense[];
  notifications: Notification[];
  home: Home;
  constructor(
    private authService: AuthService,
    private expenseService: ExpenseService,
    private notificationService: NotificationService,
    public dialog: MatDialog
  ) { }

  dialogs =
    {
      addExpense: AddExpenseComponent,
      addIncome: AddIncomeComponent,
      expenseLimit: ExpenseLimitComponent,
      userInfo: UserInfoComponent,
      editUser: EditUserComponent,
      saldo: SetSaldoComponent,
      createHome: CreateHomeComponent,
      notifications: NotificationsComponent
    };



  ngOnInit(): void {

    this.getData();
  }

  getData(): void {
    this.authService.update().then(result => {
      this.user.push(this.authService.getUser());
      this.expenseService.GetUserExpenses(this.user[0].userId).subscribe((data) => {
        this.expenses = data;
      });
      this.notificationService.GetUserNotifications(this.user[0].email).subscribe((data) => {
        this.notifications = data;
        this.notiCount = this.notifications.filter(x => !x.read).length;
      });
    });

  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }

  openDialog(dialog: string): void {



    const dialogRef = this.dialog.open(
      this.dialogs[dialog]
      , {
        width: '600px',
        data: {
          user: this.user[0],
          notifications: this.notifications
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'reload') {
        window.location.reload();
      }
    });
  }


}


