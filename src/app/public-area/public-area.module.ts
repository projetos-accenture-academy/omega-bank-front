import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicAreaRoutingModule } from './public-area-routing.module';
import { PublicAreaComponent } from './public-area.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Error404Component } from './error404/error404.component';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { NgxMaskModule } from 'ngx-mask'

@NgModule({
  declarations: [
    PublicAreaComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    Error404Component,
  ],
  imports: [
    CommonModule,
    PublicAreaRoutingModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forChild()

  ]
})
export class PublicAreaModule { }


