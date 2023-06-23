import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  @Input() parentForm: any; 
  @Input() controlName: string = '';
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  control:FormControl = new FormControl('');


  ngOnInit(): void {
    this.control = this.parentForm.get(this.controlName) ;
  }
}
