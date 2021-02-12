import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaAdminModule } from './area-admin/area-admin.module';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AreaAdminModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt'
  }, {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
