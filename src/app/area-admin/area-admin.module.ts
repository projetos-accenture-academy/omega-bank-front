import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AccountPlansFormComponent } from './account-plans/account-plans-form/account-plans-form.component';
import { AccountPlansComponent } from './account-plans/account-plans.component';
import { AccountStatementsComponent } from './account-statements/account-statements.component';
import { StatementsFilterComponent } from './account-statements/statements-filter/statements-filter.component';
import { StatementsListComponent } from './account-statements/statements-list/statements-list.component';
import { AreaAdminRoutingModule } from './area-admin-routing.module';
import { AreaAdminComponent } from './area-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';






@NgModule({
  declarations: [AreaAdminComponent, HeaderAdminComponent, DashboardComponent,
    UserProfileComponent, AccountPlansComponent, AccountStatementsComponent,
    StatementsListComponent, StatementsFilterComponent, AccountPlansFormComponent, TransactionFormComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule, MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    AreaAdminRoutingModule,
    HttpClientModule, MatDialogModule, MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AreaAdminModule { }
