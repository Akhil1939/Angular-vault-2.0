import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() title: string = "";
  @Input() name: string= "";
  @Output() nameChange = new EventEmitter<string>();

  onNameChange() {
    this.nameChange.emit(this.name);
  }

}
