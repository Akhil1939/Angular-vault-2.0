import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-communication';

  list:string[] = ['Angular 8', 'React', 'Vue'];

  NewItemAdded(value: string) {
    this.list.push(value);
  }
}
