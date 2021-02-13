import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AccountStatementsComponent } from './account-statements/account-statements.component';
import { AreaAdminRoutingModule } from './area-admin-routing.module';
import { AreaAdminComponent } from './area-admin.component';
import { CategoryRecordComponent } from './category-record/category-record.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';




@NgModule({
  declarations: [AreaAdminComponent, HeaderAdminComponent, DashboardComponent, UserProfileComponent, CategoryRecordComponent, AccountStatementsComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule, MatFormFieldModule, MatPaginatorModule, MatTableModule, MatInputModule,
    AreaAdminRoutingModule

  ],
})
export class AreaAdminModule { }
