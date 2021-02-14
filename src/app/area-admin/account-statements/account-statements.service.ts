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

  getUserAccountStatements(params: string = ""): Observable<UserAccountData> {

    return this.http.get<UserAccountData>(this.API_URL + params);
  }
}
