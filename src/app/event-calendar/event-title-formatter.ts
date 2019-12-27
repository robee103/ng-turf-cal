import { LOCALE_ID, Inject, Injectable } from '@angular/core';
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { differenceInMinutes, differenceInHours } from 'date-fns';

@Injectable()
export class EventTitleFormatter extends CalendarEventTitleFormatter {
  constructor(@Inject(LOCALE_ID) private locale: string) {
    super();
  }

  // you can override any of the methods defined in the parent class

  month(event: CalendarEvent): string {
    return `<b>${new DatePipe(this.locale).transform(
      event.start,
      'm',
      this.locale
    )}</b> ${event.title}`;
  }

  week(event: CalendarEvent): string {
    const minuteDiff = differenceInMinutes(event.end, event.start);
    const eventDuration = minuteDiff >= 60 ? (minuteDiff / 60) + ' hour' : minuteDiff + ' mins';
    return `<b>${event.title}</b> <span class="float-right"><span class='badge badge-success'>${eventDuration}</span></span>`;
  }

  day(event: CalendarEvent): string {
    return `<b>${new DatePipe(this.locale).transform(
      event.start,
      'h:m a',
      this.locale
    )}</b> ${event.title}`;
  }
}
