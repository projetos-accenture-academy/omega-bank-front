import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogadoGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {
    const estaLogado = this.authService.isLoggedIn();

    if (estaLogado) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }

}
