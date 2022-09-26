import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './AppModuleComponents/home/home.component';
import { TransactionOverviewComponent } from './Modules/transaction/transaction-overview/transaction-overview.component';


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
  component: TransactionOverviewComponent,
  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
