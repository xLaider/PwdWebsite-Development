import { PasswordChangeComponent } from './authorization/password-change/password-change.component';
import { ConfirmEmailComponent } from './authorization/confirm-email/confirm-email.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization/authorization.component';
import { UserDashboardComponent } from './user/dashboard/dashboard.component';
import { SaldoComponent } from './miniCards/saldo/saldo.component';
import { AuthGuardService as AuthGuard } from './_services/_authGuard/auth-guard.service';
import { HomeDashboardComponent } from './home/dashboard/dashboard.component';
import { UserExpenseListComponent } from './user/expense-list/expense-list.component';
import { HomeExpenseListComponent } from './home/expense-list/expense-list.component';

const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent },
  {path: 'activate/:token', component: ConfirmEmailComponent},
  {path: 'restore/:token', component: PasswordChangeComponent},
  { path: 'aasdasd/asdasd', component: SaldoComponent },
  { path: 'user/dashbord', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: 'user/operations', component: UserExpenseListComponent, canActivate: [AuthGuard]},
  { path: 'home/dashboard', component: HomeDashboardComponent, canActivate: [AuthGuard] },
  { path: 'home/operations', component: HomeExpenseListComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/user/dashbord', pathMatch: 'full' },
  { path: '**', redirectTo: '/user/dashbord' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
