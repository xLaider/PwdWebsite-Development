import { HomeService } from './../../_services/_homeService/home.service';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense/expense';
import { ExpenseType } from 'src/app/models/expenseType/expense-type';
import { User } from 'src/app/models/user/user';
import { AuthService } from 'src/app/_services/_authService/auth.service';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class HomeExpenseListComponent {
  displayedColumns: string[] = ['name', 'expenseType', 'date', 'owner', 'amount'];
  dataSource: MatTableDataSource<Expense>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  expenses: Expense[];
  expenseTypes: ExpenseType[];
  user: User;
  users: User[];

  filteredValues =
    {
      nameOfExpense: '',
      typeOfExpenseId: '',
    };


  constructor(
    private authService: AuthService,
    private expenseService: ExpenseService,
    private homeService: HomeService,
    private router: Router
  ) {
    this.authService.update().then(result => {
      this.user = this.authService.getUser();
      if (this.user.homeId === null) {
        this.router.navigateByUrl('');
      }
      this.expenseService.GetHomeExpenses(this.user.homeId).subscribe((data) => {
        this.expenses = data;
        this.dataSource = new MatTableDataSource(this.expenses);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sortingDataAccessor = (item, property) => {
          switch (property) {
            case 'name': return item.nameOfExpense;
            case 'expenseType': return this.expenseTypes[item.typeOfExpenseId];
            case 'date': return item.expenseDate;
            default: return item[property];
          }
        };
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate =
          (exp: Expense, filter: string) =>
            !filter ||
            (exp.typeOfExpenseId === JSON.parse(filter)['typeOfExpenseId'] ||
              JSON.parse(filter)['typeOfExpenseId'].toString() === '')
            && (JSON.parse(filter)['nameOfExpense'] === '' || exp.nameOfExpense.includes(JSON.parse(filter)['nameOfExpense']));
      });

      this.homeService.GetHomeUsers(this.user.homeId).subscribe(data => {
        this.users = data;
      });

      this.expenseService.GetAllExpenseTypes().subscribe((data) => {
        this.expenseTypes = data;
      });

    });

  }

  applyFilterSelect(event: string): void {

    this.filteredValues['typeOfExpenseId'] = event ? event : '';
    this.dataSource.filter = JSON.stringify(this.filteredValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;


    this.filteredValues['nameOfExpense'] = filterValue.trim().toLowerCase();
    this.dataSource.filter = JSON.stringify(this.filteredValues);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getUserEmail(id: number): string {
    return this.users.find(a => a.userId === id).email;
  }

  getType(id: number): string {
    if (this.expenseTypes.length > 0) {

      return this.expenseTypes.find(a => a.typeOfExpenseId === id).name;
    }
    return null;
  }
}
