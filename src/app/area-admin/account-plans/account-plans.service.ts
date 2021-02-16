import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { AccountPlanData } from './account-plans.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountPlansService {
  API_URL = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  getAccountPlans(): Observable<AccountPlanData[]> {
    return this.http.get<AccountPlanData[]>(this.API_URL + "planos");
  }

  posAccountPlan(description: string): Observable<any> {
    return this.http.post(this.API_URL + "planos", '');
  }
}
