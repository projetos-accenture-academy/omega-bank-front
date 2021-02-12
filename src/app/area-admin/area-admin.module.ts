import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AreaAdminComponent } from './area-admin.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';




@NgModule({
  declarations: [AreaAdminComponent, HeaderAdminComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule

  ]
})
export class AreaAdminModule { }
