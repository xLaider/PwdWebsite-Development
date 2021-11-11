import { Component, Input, OnInit, } from '@angular/core';
import { Expense } from 'src/app/models/expense/expense';
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html'
})
export class DiagramComponent implements OnInit {
  @Input() expenses: Expense[];
  chartData = [
    {
      data: [],
      label: 'Przychody'
    },
    {
      data: [],
      label: 'Wydatki'
    }
  ];

  chartLabels = [];

  chartOptions = {
    responsive: true
  };

  expensesSum = 0;
  incomeSum = 0;

  ngOnInit(): void {
    for (let index = 5; index >= 0; index--) {
      this.expensesSum = 0;
      this.incomeSum = 0;
      const date = new Date();
      date.setMonth(new Date().getMonth() - index);
      date.setDate(1);
      const afterdate = new Date();
      afterdate.setDate(1);
      afterdate.setMonth(new Date().getMonth() - index + 1);
      this.expenses.forEach(element => {
        if (new Date(element.expenseDate) > date && new Date(element.expenseDate) <= afterdate) {
          if (element.typeOfExpenseId === 1) {
            this.incomeSum += element.amount;
          } else {
            this.expensesSum += element.amount;
          }
        }
      });
      this.chartLabels.push(date.toLocaleString('pl-PL', { month: 'long' }));
      this.chartData[0].data.push(this.incomeSum);
      this.chartData[1].data.push(this.expensesSum);
    }

  }

}
