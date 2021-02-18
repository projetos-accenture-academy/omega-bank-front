import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  @Input() title: string | undefined;
  nameUser: string | undefined;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.nameUser = this.auth.getUser()?.nome.split(' ')[0] ?? "<VAZIO>";
  }

  doLogout() {
    this.auth.logout();
  }

}
