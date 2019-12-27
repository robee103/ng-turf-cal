import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay, CalendarEventTitleFormatter, CalendarView } from 'angular-calendar';
import { setHours, setMinutes, addMinutes } from 'date-fns';
import { EventTitleFormatter } from './event-title-formatter';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './event-calendar.component.html',
  providers: [
    {
      provide: CalendarEventTitleFormatter,
      useClass: EventTitleFormatter
    }
  ],
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent {

  dispa : String;

  view: CalendarView = CalendarView.Week;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [{
    title: 'Josh',
    start: setHours(setMinutes(new Date(), 0), 3),
    end: setHours(setMinutes(new Date(), 30), 3)
    // color: colors.blue
  },
  {
    title: 'Raj',
    start: setHours(setMinutes(new Date(), 0), 3),
    end: setHours(setMinutes(new Date(), 0), 4)
    // color: colors.yellow
  }
  ];

  constructor(private modalService: NgbModal) { }

  changeDay(date: Date) {
    this.viewDate = date;
    this.view = CalendarView.Day;
  }

  viewChange(viewStr: String) {
    let tempView = CalendarView.Week;
    if (viewStr === 'month') {
      tempView = CalendarView.Month;
    }
    if (viewStr === 'day') {
      tempView = CalendarView.Day;
    }
    this.view = tempView;
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
    this.dispa = JSON.stringify(event);
  }

  hourClicked(event: Date): void {
    console.log('Event clicked', event);
    this.dispa = JSON.stringify(event);
  }
}
