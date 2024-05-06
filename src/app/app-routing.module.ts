import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { SaveExpenseComponent } from './save-expense/save-expense.component';
import { GetExpenseComponent } from './get-expense/get-expense.component';
import { MonthlyExpenseComponent } from './monthly-expense/monthly-expense.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'SaveExpense', component: SaveExpenseComponent },
  { path: 'GetExpense', component: GetExpenseComponent },
  { path: 'MonthlyExpense', component: MonthlyExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
