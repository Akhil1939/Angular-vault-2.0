import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input() label: string;
  @Input() control: FormControl;
}
