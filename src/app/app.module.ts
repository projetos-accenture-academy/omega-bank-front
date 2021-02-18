import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getPaginatorIntl } from './paginator-intl';
import { HomeComponent } from './public-area/home/home.component';
import { LoginComponent } from './public-area/login/login.component';
import { SignupComponent } from './public-area/signup/signup.component';
import { SharedModule } from './shared/shared.module';



registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    HttpClientModule, ReactiveFormsModule,
    NgxMaskModule.forRoot(
      {
        dropSpecialCharacters: true //removes mask when saving
      }
    )
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    },
    {
      provide: MatPaginatorIntl,
      useValue: getPaginatorIntl()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
