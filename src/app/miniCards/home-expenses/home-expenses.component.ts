import { User } from './../../models/user/user';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class HomeExpensesComponent implements OnInit {
  @Input() expenses: Expense[];
  @Input() user: User[];
  expenseSum = 0;
  userExpense: number;
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [[]
  ];
  public doughnutChartColors: Array<any> = [{ backgroundColor: ['#BBBAFF', '#FFC2E2', '#F4FDB1', '#7C8BFF', '#95FFF7', '#D6FFC7', '#FFD6AA', '#C7D6DB', '#EADB80', '#B1D3C5', '#D9BBE6', '#AEDDEF', '#957DAD', '#DAE794', '#FEF5D4', '#E4BEB3', '#CE8467', '#FF9C9F', '#F7EAE2', '#EBEBE3'], borderColor: 'transparent' }];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    const now = new Date();
    now.setMonth(now.getMonth() - 1);
    const afterdate = new Date();
    this.expenses = this.expenses.filter(a => new Date(a.expenseDate) > now && new Date(a.expenseDate) <= afterdate);


    this.user.forEach(user => {
      this.userExpense = 0;
      this.doughnutChartLabels.push((user.firstName == null ? '' : user.firstName) + ' ' + (user.lastName == null ? '' : user.lastName));
      this.expenses.forEach(element => {
        if (element.typeOfExpenseId !== 1 && element.ownerId === user.userId) {
          this.userExpense += element.amount;
        }
      });
      this.doughnutChartData[0].push(this.userExpense);
    });
  }
}
