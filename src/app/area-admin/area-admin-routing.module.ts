import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountPlansComponent } from './account-plans/account-plans.component';
import { AccountStatementsComponent } from './account-statements/account-statements.component';
import { AreaAdminComponent } from './area-admin.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'extrato',
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
        path: 'transacao',
        component: TransactionFormComponent,
      },
      {
        path: 'planos-conta',
        component: AccountPlansComponent,
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
