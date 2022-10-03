import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './AppModuleComponents/home/home.component';
import { TransactionAddComponent } from './Modules/transaction/transaction-add/transaction-add.component';
import { TransactionOverviewComponent } from './Modules/transaction/transaction-overview/transaction-overview.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'addCreditCard',
    loadComponent: () =>
      import(
        './Standalone Components/credit-card-add/credit-card-add.component'
      ).then((mod) => mod.CreditCardAddComponent),
  },
  {
    path: 'transactions/:uid',
    component: TransactionOverviewComponent,
  },
  {
    path: 'transactions',
    component: TransactionOverviewComponent,
  },
  {
    path: 'addTransaction',
    component: TransactionAddComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
