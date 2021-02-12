import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaAdminComponent } from './area-admin/area-admin.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AreaAdminComponent
  },
  {
    path: '**',
    component: Error404Component
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
