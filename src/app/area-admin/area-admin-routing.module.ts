import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountStatementsComponent } from './account-statements/account-statements.component';
import { AreaAdminComponent } from './area-admin.component';
import { CategoryRecordComponent } from './category-record/category-record.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AreaAdminComponent,
    children: [
      {
        path: 'extrato',
        component: AccountStatementsComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'planos-conta',
        component: CategoryRecordComponent,
      },
      {
        path: 'meu-perfil',
        component: UserProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaAdminRoutingModule { }
