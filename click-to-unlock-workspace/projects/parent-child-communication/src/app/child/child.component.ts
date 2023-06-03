import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Output() newItemEvent = new EventEmitter<string>();
  @Input() list: string[] = [];

  AddItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
