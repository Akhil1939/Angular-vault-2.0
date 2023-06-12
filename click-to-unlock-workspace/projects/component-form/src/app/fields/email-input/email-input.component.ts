import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.css']
})
export class EmailInputComponent {
  @Input() title: string = "";
  @Input() Email: string = "";
  @Output() emailChange = new EventEmitter<string>();

  onChange() {
    this.emailChange.emit(this.Email);
  }
}
