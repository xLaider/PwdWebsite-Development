import { HomeExpenseListComponent } from './home/expense-list/expense-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authorization/login/login.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { RemindPasswordComponent } from './authorization/remind-password/remind-password.component';
import { RegisterComponent } from './authorization/register/register.component';
import { SaldoComponent } from './miniCards/saldo/saldo.component';
import { LogoutComponent } from './miniCards/logout/logout.component';
import { ProfileComponent } from './miniCards/profile/profile.component';
import { ExpensesComponent } from './miniCards/expenses/expenses.component';
import { ChartsModule } from 'ng2-charts';
import { DiagramComponent } from './miniCards/diagram/diagram.component';
import { TargetProgressComponent } from './miniCards/target-progress/target-progress.component';
import { IncomeComponent } from './miniCards/income/income.component';
import { CalendarComponent } from './miniCards/calendar/calendar.component';
import { HomeComponent } from './miniCards/home/home.component';
import { ExpenseLimitComponent } from './user/expense-limit/expense-limit.component';
import { UserExpenseListComponent } from './user/expense-list/expense-list.component';
import { AddExpenseComponent } from './user/add-expense/add-expense.component';
import { AddIncomeComponent } from './user/add-income/add-income.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { ConfirmEmailComponent } from './authorization/confirm-email/confirm-email.component';
import { HomeDashboardComponent } from './home/dashboard/dashboard.component';
import { ProfileListComponent } from './miniCards/profile-list/profile-list.component';
import { HomeExpensesComponent } from './miniCards/home-expenses/home-expenses.component';
import { SetSaldoComponent } from './user/set-saldo/set-saldo.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeSaldoComponent } from './home/home-saldo/home-saldo.component';
import { HomeInfoComponent } from './home/home-info/home-info.component';
import { HomeUserInfoComponent } from './home/home-user-info/home-user-info.component';
import { AddToHomeComponent } from './home/add-to-home/add-to-home.component';
import { EditHomeComponent } from './home/edit-home/edit-home.component';
import { HomeIncomeComponent } from './home/home-income/home-income.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CreateHomeComponent } from './user/create-home/create-home.component';
import { NotificationsComponent } from './user/notifications/notifications.component';
import { PasswordChangeComponent } from './authorization/password-change/password-change.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeDashboardComponent,
    AuthorizationComponent,
    RemindPasswordComponent,
    RegisterComponent,
    SaldoComponent,
    LogoutComponent,
    ProfileComponent,
    ExpensesComponent,
    DiagramComponent,
    TargetProgressComponent,
    IncomeComponent,
    CalendarComponent,
    HomeComponent,
    ExpenseLimitComponent,
    UserDashboardComponent,
    UserExpenseListComponent,
    HomeExpenseListComponent,
    AddExpenseComponent,
    AddIncomeComponent,
    UserInfoComponent,
    ConfirmEmailComponent,
    ProfileListComponent,
    HomeExpensesComponent,
    EditUserComponent,
    SetSaldoComponent,
    HomeSaldoComponent,
    HomeInfoComponent,
    HomeIncomeComponent,
    HomeUserInfoComponent,
    AddToHomeComponent,
    EditHomeComponent,
    CreateHomeComponent,
    NotificationsComponent,
    PasswordChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    FlexLayoutModule,
    MatDatepickerModule,
     MatMomentDateModule
  ],
  providers: [ {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
