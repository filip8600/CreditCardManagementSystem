import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreditCard,
  CreditCardService,
} from 'src/app/Services/credit-card.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],
})
export class TransactionAddComponent implements OnInit {
  constructor(private service: CreditCardService) {}

  ngOnInit(): void {}
}
