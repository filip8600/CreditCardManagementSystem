import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.delete<Observable<object>>(`${this.rootUrl}/${transaction_uid}`);
  }

  addTransaction(transaction:Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.rootUrl}`,transaction);
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
