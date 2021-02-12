import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreaAdminComponent } from './area-admin/area-admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AreaAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
