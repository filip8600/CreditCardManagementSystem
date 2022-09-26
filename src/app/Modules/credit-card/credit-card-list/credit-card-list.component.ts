import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CreditCard,
  CreditCardService,
} from 'src/app/Services/credit-card.service';

@Component({
  selector: 'app-credit-card-list',
  templateUrl: './credit-card-list.component.html',
  styleUrls: ['./credit-card-list.component.scss'],
})
export class CreditCardListComponent implements OnInit {
  cards$: Observable<CreditCard[]>;

  constructor(creditCardService: CreditCardService) {
    this.cards$ = creditCardService.getCards();
  }

  ngOnInit(): void {}
}
