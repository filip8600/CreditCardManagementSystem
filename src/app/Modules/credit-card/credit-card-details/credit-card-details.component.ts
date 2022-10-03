import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CreditCard,
  CreditCardService,
} from 'src/app/Services/credit-card.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.scss'],
})
export class CreditCardDetailsComponent implements OnInit {
  card$: Observable<CreditCard>;

  constructor(
    private activatedRoute: ActivatedRoute,
    creditCardService: CreditCardService
  ) {
    const cardNumber: number = parseInt(
      this.activatedRoute.snapshot.paramMap.get('card_number') ?? '' // witchcraft
    );
    this.card$ = creditCardService.getCard(cardNumber);
  }

  ngOnInit(): void {}
}
