import { AddToHomeComponent } from './../add-to-home/add-to-home.component';
import { EditHomeComponent } from './../edit-home/edit-home.component';
import { HomeIncomeComponent } from './../home-income/home-income.component';
import { HomeSaldoComponent } from './../home-saldo/home-saldo.component';
import { HomeInfoComponent } from './../home-info/home-info.component';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/_homeService/home.service';
import { UserService } from './../../_services/_userService/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expense } from 'src/app/models/expense/expense';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../dashboardStyles.scss']
})
export class HomeDashboardComponent implements OnInit {
  userId: number;
  user: User[];
  tempUser: User;
  expenses: Expense[];
  saldo = 0;
  dialogs =
    {
      homeInfo: HomeInfoComponent,
      homeSaldo: HomeSaldoComponent,
      homeIncome: HomeIncomeComponent,
      homeEdit: EditHomeComponent,
      addToHome: AddToHomeComponent
    };





  constructor(
    private authService: AuthService,
    private expenseService: ExpenseService,
    public dialog: MatDialog,
    private homeService: HomeService,
    private userService: UserService,
    private router: Router
  ) { }





  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.authService.update().then(result => {
      this.tempUser = this.authService.getUser();
      if (this.tempUser.homeId === null) {
        this.router.navigateByUrl('');
      }
      this.homeService.GetHomeUsers(this.tempUser.homeId).subscribe((data) => {
        this.user = data;
        this.user.forEach(element => {
          this.saldo += element.saldo;
          this.expenseService.GetHomeExpenses(this.tempUser.homeId).subscribe((homeExpenses) => {
            this.expenses = homeExpenses;
          });
        });
      });
    });



  }



  leave(): void {
    this.userService.LeaveHome(this.tempUser.userId).subscribe((data) => {
      this.router.navigateByUrl('');
    });
  }

  openDialog(dialog: string): void {



    const dialogRef = this.dialog.open(
      this.dialogs[dialog]
      , {
        width: '600px',
        data: {
          homeId: this.tempUser.homeId,
          users: this.user,
          expenses: this.expenses,
          sender: this.tempUser.email
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'reload') {
        window.location.reload();
      }
    });
  }



}
