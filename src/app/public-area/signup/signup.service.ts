import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { SignupRequest } from './signup.interfaces';


@Injectable({
  providedIn: 'root'
})


  export class SignupService {
  
    API_URL = environment.API_URL;
  
    constructor(
      private http: HttpClient,
    ) { }
  
    criarUsuario(signupReq: SignupRequest): Observable<null> {
      return this.http.post<any>(this.API_URL + '/user', signupReq);
    }
  }
  