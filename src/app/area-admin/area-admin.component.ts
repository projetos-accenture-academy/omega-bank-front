import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MenuItem } from 'src/types/menu-item';

@Component({
  selector: 'app-area-admin',
  templateUrl: './area-admin.component.html',
  styleUrls: ['./area-admin.component.scss']
})
export class AreaAdminComponent implements OnInit {
  @ViewChild('sidenav') elementView: ElementRef | undefined;

  mode: MatDrawerMode = 'side';

  menuitems: MenuItem[] = [{
    title: 'Dashboard',
    routerLink: 'dashboard',
    tooltip: 'Dashboard com resumos',
    icon: 'dashboard'
  }, {
    title: 'Plano de contas',
    routerLink: 'planos-conta',
    tooltip: 'Cadastro de planos de contas',
    icon: 'category'
  }, {
    title: 'Meu perfil',
    routerLink: 'meu-perfil',
    tooltip: 'Dados de cadastro',
    icon: 'account_circle'
  }, {
    title: 'Extratos',
    routerLink: 'extrato',
    tooltip: 'Extrato de lançamentos de contas',
    icon: 'summarize'
  }]

  constructor(private breakpointObserver: BreakpointObserver) {

  }

  ngOnInit(): void {
  }




}
