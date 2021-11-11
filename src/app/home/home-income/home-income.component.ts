import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user/user';
import { Expense } from 'src/app/models/expense/expense';

@Component({
  selector: 'app-home-income',
  templateUrl: './home-income.component.html',
  styleUrls: ['./home-income.component.scss']
})
export class HomeIncomeComponent {
  displayedColumns: string[] = ['name', 'email', 'saldo'];
  users: User[];
  expenses: Expense[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.users = data.users;
    this.expenses = data.expenses;

  }

  countIncoms(userId: number): number {
    let income = 0;
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const afterdate = new Date();
    this.expenses = this.expenses.filter(a => new Date(a.expenseDate) > date
      && new Date(a.expenseDate) <= afterdate && a.typeOfExpenseId === 1);
    this.expenses.forEach(element => {
      if (element.ownerId === userId) {
        income += element.amount;
      }
    });
    return income;
  }
}
