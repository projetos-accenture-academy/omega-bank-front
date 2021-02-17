import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Transaction } from './transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  postAccountPlan(accountPlan: Transaction): Observable<any> {
    return this.http.post(this.API_URL + "planos", accountPlan, this.httpOptions);
  }
}
