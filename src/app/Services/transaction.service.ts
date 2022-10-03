import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CreditCard } from './credit-card.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  rootUrl = `http://localhost:3000/transactions`


  constructor(private http: HttpClient) { }
  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.rootUrl}`)
  }

  removeTransaction(transaction_uid:string): Observable<Object> {
    console.log("launch http")

    return this.http.delete<Observable<object>>(`${this.rootUrl}/${transaction_uid}`);
  }
}

export interface Transaction {
  credit_card: CreditCard;
  amount: number;
  comment: string;
  date: number;
  currency: string;
  uid?: string;
}

export const CURRENCIES = [
  'CAD',
  'EUR',
  'KYD',
  'MWK',
  'NAD',
  'USD',
]
