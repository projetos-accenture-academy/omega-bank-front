import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from 'src/environments/environment';

import { AccountPlanData, AccountPlanNewData } from './account-plans.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountPlansService {
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
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getAccountPlans(): Observable<AccountPlanData[]> {
    //return this.http.get<AccountPlanData[]>(this.API_URL + "plan/" + this.auth.getUser()?.login, this.httpOptions);
    return this.http.get<AccountPlanData[]>(this.API_URL + "plan/" + this.auth.getUser()?.id, this.httpOptions);
  }

  postAccountPlan(accountPlan: AccountPlanNewData): Observable<any> {
    return this.http.post(this.API_URL + "plan/", accountPlan, this.httpOptions);
  }

  putAccountPlan(accountPlan: AccountPlanData): Observable<any> {
    return this.http.put(this.API_URL + "planos/" + accountPlan.id, accountPlan, this.httpOptions);
  }
}
