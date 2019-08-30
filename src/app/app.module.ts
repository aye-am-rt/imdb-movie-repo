import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1/home1.component';
import { HttpService1Service } from './http-service1.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { SearchResulsComponent } from './search-resuls/search-resuls.component';


@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    SearchResulsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
