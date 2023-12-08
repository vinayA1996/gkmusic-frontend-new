import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { CommonComponentsModule } from './common-components/common-components.module';
import { AdminModule } from './admin/admin.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HomeModule,
    CommonComponentsModule,
    AdminModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LocationStrategy, useValue: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
