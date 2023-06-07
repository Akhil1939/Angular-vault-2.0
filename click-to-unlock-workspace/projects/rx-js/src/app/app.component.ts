import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'RxJs';
  agents: Observable<string> | undefined;

  ngOnInit() {
    this.agents = new Observable(function (observer) {
      try {
        observer.next('Agent 1');
        observer.next('Agent 2');
        observer.next('Agent 3');
      } catch (err) {
        observer.error(err);
      }
    });

    this.agents.subscribe(data=>{
      // console.log(data);
    }
    );
  }
}
