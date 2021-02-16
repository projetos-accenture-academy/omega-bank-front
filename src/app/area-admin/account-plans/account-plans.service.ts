import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AccountPlanData, AccountPlanNewData } from './account-plans.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountPlansService {
  API_URL = environment.API_URL;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAccountPlans(): Observable<AccountPlanData[]> {
    return this.http.get<AccountPlanData[]>(this.API_URL + "planos");
  }

  postAccountPlan(accountPlan: AccountPlanNewData): Observable<any> {
    return this.http.post(this.API_URL + "planos", accountPlan, this.httpOptions);
  }

  putAccountPlan(accountPlan: AccountPlanData): Observable<any> {
    return this.http.put(this.API_URL + "planos/" + accountPlan.id, accountPlan, this.httpOptions);
  }
}
