import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './public-area/home/home.component';
import { LoginComponent } from './public-area/login/login.component';
import { SignupComponent } from './public-area/signup/signup.component';


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
    loadChildren: () => import('./area-admin/area-admin.module').then(m => m.AreaAdminModule)
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "home",
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
