import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicAreaComponent } from './public-area/public-area.component';


//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import('./public-area/public-area.module').then(m => m.PublicAreaModule),
    component: PublicAreaComponent,
    //canActivate: [NotLoggedGuard], //TODO: Create this
  },
  {
    path: 'admin',
    loadChildren: () => import('./area-admin/area-admin.module').then(m => m.AreaAdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
