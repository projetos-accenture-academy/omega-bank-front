import { Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


//TODO: Ajustar todos os comentários!

//import { LoginResponse } from './login.interfaces';
//import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  
  @ViewChild('username-input') username: ElementRef | undefined;
  @ViewChild('password-input') pw: ElementRef | undefined;

  usuario: string = '';
  senha: string = '';

  isLoading: boolean = false;
  loginError: boolean = false;

  constructor(
    //private loginService: LoginService,
    private router: Router
  ) { }

  onSubmit(form: NgForm) {
    this.loginError = false;
    
    if (!form.valid) {
      form.controls.usuario.markAsTouched();
      form.controls.senha.markAsTouched();

      if (form.controls.usuario.invalid) {
        this.username?.nativeElement.focus();
      }

      if (form.controls.senha.invalid) {
        this.pw?.nativeElement.focus();
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

    const credenciais = {
      usuario: this.usuario,
      senha: this.senha
    };
    
    /*
    this.loginService.logar(credenciais)
      .subscribe(
        response => this.onSuccessLogin(response),
        error => this.onErrorLogin(error)
      );
      */
  }

  /*
  onSuccessLogin(response: LoginResponse) {
    this.router.navigate(['dashboard']);
  }
  */

  onErrorLogin(error: any) {
    this.loginError = true;
    this.isLoading = false;
  }


}
