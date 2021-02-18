import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';

import { Transaction } from './transaction.interface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': this.auth.getToken() + ''
      }
    )
  };

  constructor(
    private http: HttpClient, private auth: AuthService
  ) { }

  postTransaction(data: Transaction): Observable<any> {
    return this.http.post(this.API_URL + "transaction", data, this.httpOptions);
  }
}
