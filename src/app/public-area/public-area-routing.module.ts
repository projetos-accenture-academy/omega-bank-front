import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { PublicAre AreaLogadaComponent } from './area-logada.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Error404Component } from './error404/error404.component';
//import { LancamentosComponent } from './lancamentos/lancamentos.component';
//import { PlanosContaComponent } from './planos-conta/planos-conta.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, 
    {
        path: 'home',
            component: HomeComponent
    }, 
    {
        path: 'login',
        component: LoginComponent
    }, 
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '**',
        component: Error404Component
    
    },
    
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicAreaRoutingModule { }
