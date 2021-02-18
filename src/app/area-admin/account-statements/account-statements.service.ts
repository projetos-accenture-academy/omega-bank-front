import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';

import { UserAccountData } from './account-statements.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountStatementsService {
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

  getUserAccountStatements(initialDate: string = "''", finalDate: string = "''", user: string = "''"): Observable<UserAccountData> {
    const range = `?dataInicial=${initialDate}&dataFinal=${finalDate}&login=${user}`;
    return this.http.get<UserAccountData>(this.API_URL + "dashboard" + range, this.httpOptions);
  }

  getUserAccountStatementsByAccount(initialDate: string = "''", finalDate: string = "''", user: string = "''", accountType: string = ""): Observable<UserAccountData> {
    const range = `/${accountType}?dataInicial=${initialDate}&dataFinal=${finalDate}&login=${user}`;
    return this.http.get<UserAccountData>(this.API_URL + "dashboard" + range, this.httpOptions);
  }
}
