import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  rootUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getCards(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>(`${this.rootUrl}/cards`);
  }
  getCard(card_number: number): Observable<CreditCard> {
    return this.http.get<CreditCard>(`${this.rootUrl}/cards/` + card_number);
  }
  postCard(card: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(`${this.rootUrl}/cards`, card);
  }
  deleteCard(card: CreditCard): Observable<CreditCard> {
    return this.http.delete<CreditCard>(
      `${this.rootUrl}/cards/` + card.card_number
    );
  }
}

export interface CreditCard {
  card_number: number;
  csc_code: number;
  cardholder_name: string;
  expiration_date_month: number;
  expiration_date_year: number;
  uid?: string;
  issuer: string;
}
