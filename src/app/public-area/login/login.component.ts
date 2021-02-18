import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginCredenciais } from './login.interfaces';
import { LoginService } from './login.service';


//TODO: Ajustar todos os comentários!

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  @ViewChild('username') usernameInput: ElementRef | undefined;
  @ViewChild('password') passwordInput: ElementRef | undefined;

  formUsuario = new FormGroup({
    username: new FormControl('', [
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ])
  }

  );


  isLoading: boolean = false;
  loginError: boolean = false;
  loginErrorMessage: String | undefined;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  onLoginButtonSubmit() {
    this.loginError = false;

    if (!this.formUsuario.valid) {
      this.formUsuario.controls.username.markAsTouched();
      this.formUsuario.controls.password.markAsTouched();

      if (this.formUsuario.controls.username.invalid) {
        this.usernameInput?.nativeElement.focus();
      }

      if (this.formUsuario.controls.password.invalid) {
        this.passwordInput?.nativeElement.focus();
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

    const credenciais: LoginCredenciais = {
      login: this.formUsuario.value.username,
      senha: this.formUsuario.value.password
    };

    this.loginService.logar(credenciais)
      .subscribe(
        response => this.onSuccessLogin(),
        error => this.onErrorLogin(error)
      );

  }


  onSuccessLogin() {
    this.router.navigate(['admin']);
  }


  onErrorLogin(error: any) {
    console.log("Error logging in", error);
    this.loginErrorMessage = "Não foi possível realizar login." + error.message;
    this.loginError = true;
    this.isLoading = false;
  }


}
