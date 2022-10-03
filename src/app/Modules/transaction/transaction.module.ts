import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponent } from './transaction-overview/transaction-overview.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';
import { TransactionListComponent } from 'src/app/Standalone Components/transaction-list/transaction-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TransactionOverviewComponent, TransactionAddComponent],
  imports: [CommonModule, TransactionListComponent, ReactiveFormsModule],
})
export class TransactionModule {}
