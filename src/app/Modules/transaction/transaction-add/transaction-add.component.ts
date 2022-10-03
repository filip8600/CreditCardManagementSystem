import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  CreditCard,
  CreditCardService,
} from 'src/app/Services/credit-card.service';
import {
  CURRENCIES,
  Transaction,
  TransactionService,
} from 'src/app/Services/transaction.service';

@Component({
  selector: 'app-transaction-add',
  templateUrl: './transaction-add.component.html',
  styleUrls: ['./transaction-add.component.scss'],
})
export class TransactionAddComponent implements OnInit {
  profileForm = this.fb.group({
    amount: [0, [Validators.required, Validators.min(1)]],
    currency: ['Currency', [Validators.required]],
    credit_card: [{} as CreditCard, [Validators.required]],
    date: ['', [Validators.required]],
    comment: [''],
  });

  currencys = CURRENCIES;
  credit_cards$: Observable<CreditCard[]>;
  constructor(
    private fb: FormBuilder,
    private service: CreditCardService,
    private ts: TransactionService
  ) {
    this.credit_cards$ = this.service.getCards();
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.profileForm.value);

    if (this.profileForm.valid) {
      let nc: CreditCard = this.profileForm.value.credit_card!;

      let trans: Transaction = {
        amount: this.profileForm.value.amount!,
        currency: this.profileForm.value.currency!,
        credit_card: nc,
        date: Number(Date.parse(this.profileForm.value.date!)),
        comment: this.profileForm.value.comment ?? '',
      };

      this.ts.addTransaction(trans).subscribe(() => {
        alert('Transaction added');
      });
    }
  }

  get amount() {
    return this.profileForm.get('amount');
  }

  get currency() {
    return this.profileForm.get('currency');
  }
}
