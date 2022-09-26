import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './AppModuleComponents/home/home.component';
import { CreditCardAddComponent } from './Standalone Components/credit-card-add/credit-card-add.component';
import { TransactionListComponent } from './Standalone Components/transaction-list/transaction-list.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
},
{
path: 'addCreditCard',
loadComponent: 
  ()=> import
    (
      './Standalone Components/credit-card-add/credit-card-add.component'
    ).then(mod => mod.CreditCardAddComponent)
},{
  path: 'transactions',
  component: TransactionListComponent,
  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
