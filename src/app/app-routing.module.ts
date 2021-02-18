import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public-area/home/home.component';
import { LoginComponent } from './public-area/login/login.component';
import { SignupComponent } from './public-area/signup/signup.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';


//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  },
  {
    path: "admin",
    loadChildren: () => import('./area-admin/area-admin.module').then(m => m.AreaAdminModule),
    canActivate: [EstaLogadoGuard],
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [NaoEstaLogadoGuard],
  },
  {
    path: "signup",
    component: SignupComponent,
    canActivate: [NaoEstaLogadoGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [NaoEstaLogadoGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
