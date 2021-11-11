import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html'
})
export class AddIncomeComponent {

  form: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddIncomeComponent>,
    private expenseService: ExpenseService,
    private snackBar: MatSnackBar
  ) { }

  onSubmit(): void {
    this.form['ownerId'] = this.data.user.userId;
    this.form['typeOfExpenseId'] = 1;
    this.expenseService.AddExpense(this.form).subscribe(
      data => {
        this.dialogRef.close('reload');
      },
      err => {
        this.snackBar.open('Błąd dodawania przychodu', 'Zamknij', { duration: 2000, });
      }
    );
  }

}
