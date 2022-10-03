import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import {
  Transaction,
  TransactionService,
} from 'src/app/Services/transaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class TransactionListComponent implements OnInit {
  transactions$: Observable<Transaction[]>;
  filterNumber: string;

  constructor(
    private ts: TransactionService,
    private activatedRoute: ActivatedRoute
  ) {
    this.filterNumber = this.activatedRoute.snapshot.paramMap.get('uid') ?? '';
    this.transactions$ = ts.getTransactions();
    this.onChange(); //.map(transaction => transaction.filter(tx=> transaction.CreditCard.card_number+'').indexOf(this.filterNumber)>-1);
  }
  convertDate(date: number): string {
    var date1 = new Date(date);
    return date1.toDateString();
  }

  onChange(): void {
    this.transactions$ = this.transactions$.pipe(
      map((transactions) =>
        transactions.filter(
          (transaction) =>
            String(transaction.credit_card.card_number).indexOf(
              this.filterNumber
            ) > -1
        )
      )
    );
  }

  ngOnInit(): void {}
}
