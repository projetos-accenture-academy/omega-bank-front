import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { finalize, take } from 'rxjs/operators';

import { ErrosDeCadastro } from './signup.enums';
import { SignupRequest } from './signup.interfaces';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  @ViewChild('nome') nome: ElementRef | undefined;
  @ViewChild('login') login: ElementRef | undefined;
  @ViewChild('cpf') cpf: ElementRef | undefined;
  @ViewChild('telefone') telefone: ElementRef | undefined;
  @ViewChild('senha') senha: ElementRef | undefined;

  dadosCadastrais: SignupRequest = {
    nome: '',
    cpf: '',
    telefone:'',
    email:'',
    login: '',
    senha: '',
    senha1:''
  };

  erro = false
  mensagemErro = '';
  estaCarregando = false;

  usuarioCriado = false;
  usuarioCriadoBlock=false;

  constructor(
    private cadastroService: SignupService,
  ) { }

  onSubmit(form: NgForm) {
    this.erro = false;

    if (!form.valid) {
      this.validarCamposDoFormulario(form.form);
      this.focarNoPrimeiroInputInvalido(form);
      return;
    }

    this.criarUsuario();
  }

  private validarCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field) as FormControl;
      control.markAsTouched();
    });
  }

  private focarNoPrimeiroInputInvalido(form: NgForm) {
    for (let control of Object.keys(form.controls)) {
      if (form.controls[control].invalid) {
        const input = `${control}Input` as keyof SignupComponent;
        (this[input] as ElementRef).nativeElement.focus();
        break;
      }
    }
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

  criarUsuario() {
    this.estaCarregando = true;

    this.cadastroService.criarUsuario(this.dadosCadastrais)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        _response => this.onSuccessCriarUsuario(),
        error => this.onErrorCriarUsuario(error)
      );
  }


  onSuccessCriarUsuario() {
    this.usuarioCriado = true;
  }

  onErrorCriarUsuario(errorResponse: HttpErrorResponse) {
    
    console.log(this.dadosCadastrais);
    console.log(errorResponse);

    this.erro = true;

    if (errorResponse.error.codigo === ErrosDeCadastro.UsuarioJaExiste) {
      this.mensagemErro = errorResponse.error.error;
    }
  }

}

