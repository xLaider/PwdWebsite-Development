import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Inject } from '@angular/core';
import { ExpenseType } from 'src/app/models/expenseType/expense-type';
import { ExpenseService } from 'src/app/_services/_expenseService/expense.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent {

  form: any = {};
  expenseTypes: ExpenseType[];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddExpenseComponent>,
    private expenseService: ExpenseService,
    private snackBar: MatSnackBar
  ) {

    this.expenseService.GetAllExpenseTypes().subscribe((response) => {
      this.expenseTypes = response.filter(a => a.typeOfExpenseId !== 1);
    });

  }

  onSubmit(): void {
    this.form['ownerId'] = this.data.user.userId;
    this.expenseService.AddExpense(this.form).subscribe(
      data => {
        this.dialogRef.close('reload');
      },
      err => {
        this.snackBar.open('Błąd dodawania wydatku', 'Zamknij', { duration: 2000, });
      }
    );
  }

}
