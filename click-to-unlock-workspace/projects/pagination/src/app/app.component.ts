import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first: number = 0;

  rows: number = 10;
  currentPage: number = 1;

  onPageChange(event: any) {
      this.first = event.first;
      this.rows = event.rows;
      console.log("event",event);
      this.currentPage = event.page + 1;
      console.log("current Page",this.currentPage);
  }
}
