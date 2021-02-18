import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';


@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userForm = new FormGroup({
    cpf: new FormControl('', [
      Validators.required,

    ]),
    name: new FormControl('', [
      Validators.required,
    ]),
    login: new FormControl('', [
      Validators.required,
    ]),
    phonenumber: new FormControl('', [
      Validators.required,
    ]),
  });

  name: string = "";
  login: string = "";
  cpf: string = "";
  phonenumber: string = "";

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData() {
    const userData = this.auth.getUser();

    if (userData) {
      this.name = (userData.nome);
      this.cpf = userData.cpf;
      this.login = userData.login;
      this.phonenumber = userData.telefone;
    }
  }

}
