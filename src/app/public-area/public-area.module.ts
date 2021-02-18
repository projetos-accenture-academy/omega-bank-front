import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { PublicAreaRoutingModule } from './public-area-routing.module';
import { PublicAreaComponent } from './public-area.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    PublicAreaComponent,
    HomeComponent,
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


