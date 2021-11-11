import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class ExpensesComponent implements OnInit {
  @Input() expenses: Expense[];
  expenseSum = 0;
  expenseTypeSum: number;
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
    this.expenseService.GetAllExpenseTypes().subscribe((data) => {
      data.forEach(element => {
        if (element.typeOfExpenseId !== 1) {
          this.doughnutChartLabels.push(element.name);
          this.expenseTypeSum = 0;
          this.expenses.filter(a => a.typeOfExpenseId === element.typeOfExpenseId).forEach(expense => {
            this.expenseTypeSum += expense.amount;
          });
          this.doughnutChartData[0].push(this.expenseTypeSum);
          this.expenseSum += this.expenseTypeSum;
        }
      });
    });
  }

}
