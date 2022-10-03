import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  service: CreditCardService;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    creditCardService: CreditCardService
  ) {
    const cardNumber: number = parseInt(
      this.activatedRoute.snapshot.paramMap.get('card_number') ?? '' // witchcraft
    );
    this.card$ = creditCardService.getCard(cardNumber);
    this.service = creditCardService;
  }

  public deleteCard(card: CreditCard) {
    console.log('deleted card: ' + card.card_number);
    this.service
      .deleteCard(card)
      .subscribe(() => this.router.navigateByUrl('/'));
  }

  ngOnInit(): void {}
}
