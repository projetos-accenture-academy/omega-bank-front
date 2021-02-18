import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { UserAccountData } from './account-statements.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountStatementsService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getUserAccountStatements(initialDate: string = "''", finalDate: string = "''", user: string = "''"): Observable<UserAccountData> {
    const range = `?dataInicial=${initialDate}&dataFinal=${finalDate}&login=${user}`;
    return this.http.get<UserAccountData>(this.API_URL + "dashboard" + range);
  }

  getUserAccountStatementsByAccount(initialDate: string = "''", finalDate: string = "''", user: string = "''", accountType: string = ""): Observable<UserAccountData> {
    const range = `/${accountType}?dataInicial=${initialDate}&dataFinal=${finalDate}&login=${user}`;
    return this.http.get<UserAccountData>(this.API_URL + "dashboard" + range);
  }
}
