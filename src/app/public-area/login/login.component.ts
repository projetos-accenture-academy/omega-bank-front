import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginResponse } from './login.interfaces';
import { LoginService } from './login.service';


//TODO: Ajustar todos os comentários!

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  @ViewChild('username-input') usernameInput: ElementRef | undefined;
  @ViewChild('password-input') pwInput: ElementRef | undefined;

  username: string = '';
  pw: string = '';

  isLoading: boolean = false;
  loginError: boolean = false;
  loginErrorMessage: String = "Erro: Login ou senha incorretos";

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  onLoginButtonSubmit(form: NgForm) {
    this.router.navigate(['admin']);

    this.loginError = false;

    if (!form.valid) {
      form.controls.username.markAsTouched();
      form.controls.pw.markAsTouched();

      if (form.controls.username.invalid) {
        this.usernameInput?.nativeElement.focus();
      }

      if (form.controls.pw.invalid) {
        this.pwInput?.nativeElement.focus();
      }

      return;
    }

    this.login();
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  login() {
    this.isLoading = true;
    console.log("Entrou na 2 login");

    const credenciais = {
      usuario: this.username,
      senha: this.pw
    };

    this.loginService.logar(credenciais)
      .subscribe(
        response => this.onSuccessLogin(response),
        error => this.onErrorLogin(error)
      );

  }


  onSuccessLogin(response: LoginResponse) {
    this.router.navigate(['admin']);
  }


  onErrorLogin(error: any) {
    console.log("Error logging in");
    this.loginError = true;
    this.isLoading = false;
  }


}
