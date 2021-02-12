import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AreaAdminRoutingModule } from './area-admin-routing.module';
import { AreaAdminComponent } from './area-admin.component';
import { CategoryRecordComponent } from './category-record/category-record.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';




@NgModule({
  declarations: [AreaAdminComponent, HeaderAdminComponent, DashboardComponent, UserProfileComponent, CategoryRecordComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    AreaAdminRoutingModule

  ],
})
export class AreaAdminModule { }
