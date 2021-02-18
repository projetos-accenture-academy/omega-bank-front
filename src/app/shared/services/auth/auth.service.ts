import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/public-area/login/login.interfaces';

import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userLogin: Usuario | undefined;
  private token: string | undefined;
  private userData: LoginResponse | undefined;

  constructor(private router: Router) { }

  setUser(usuario: Usuario) {
    this.userLogin = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  setUserData(data: LoginResponse) {
    this.userData = data;
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getUser() {
    if (this.userLogin) {
      return this.userLogin;
    }

    const usuarioGuardado = localStorage.getItem('userData');
    if (usuarioGuardado) {
      this.userLogin = JSON.parse(usuarioGuardado);
      return this.userLogin;
    }

    return undefined;
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const tokenGuardado = localStorage.getItem('token');
    if (tokenGuardado) {
      this.token = tokenGuardado;
      return this.token;
    }

    return undefined;
  }

  logout() {
    delete this.userLogin;
    delete this.token;
    delete this.userData;
    localStorage.clear();

    this.router.navigate(['login']);
  }

  isLoggedIn() {
    if (this.getUser() && this.getToken()) {
      return true;
    }

    return false;
  }


}
