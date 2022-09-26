import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, TransactionService } from 'src/app/Services/transaction.service';

@Component({
  standalone: true,
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  imports:[CommonModule]
})
export class TransactionListComponent implements OnInit {
  transactions$: Observable<Transaction[]>

  constructor(private ts:TransactionService) { 
    this.transactions$=ts.getTransactions();
  }
  convertDate(date:number):string{
    var date1=new Date(date);
    return date1.toDateString()
  }

  ngOnInit(): void {
  }

}
