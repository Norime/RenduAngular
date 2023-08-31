import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarComponent } from './car/car.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CarComponent,
    MessagesComponent,
    CarDetailComponent,
    CarSearchComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }