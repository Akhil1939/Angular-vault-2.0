import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
 @Input() minDate: Date = new Date(2023, 0, 1);
  @Input() maxDate: Date = new Date(2024, 0, 1);
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() value: Date = new Date();
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  // @Input() DateFormat: string = 'MM-dd-YYYY';
  @Input() DateFormat: string = 'dd-MM-YYYY';
  
  @Output() dateEvent = new EventEmitter<Date>();
  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
  }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>, format: string = this.DateFormat) {
    const datePipe = new DatePipe('en-US');
    const formattedDate = datePipe.transform(event.value, format);
    console.log('dateEvent', formattedDate);
    this.dateEvent.emit(formattedDate ? new Date(formattedDate) : new Date());
  }

}