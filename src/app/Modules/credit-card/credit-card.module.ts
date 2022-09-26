import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardListComponent } from './credit-card-list/credit-card-list.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';

@NgModule({
  declarations: [CreditCardListComponent, CreditCardDetailsComponent],
  exports: [CreditCardListComponent, CreditCardDetailsComponent],
  imports: [CommonModule, CreditCardRoutingModule],
})
export class CreditCardModule {}
