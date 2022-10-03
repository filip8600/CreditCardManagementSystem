import { Component, OnInit } from '@angular/core';
import { TransactionListComponent } from 'src/app/Standalone Components/transaction-list/transaction-list.component';

@Component({
  selector: 'app-transaction-overview',
  templateUrl: './transaction-overview.component.html',
  styleUrls: ['./transaction-overview.component.scss']
})
export class TransactionOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
