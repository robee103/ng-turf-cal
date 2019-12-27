import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';

import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }) ],
  declarations: [ AppComponent, EventCalendarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
