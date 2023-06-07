import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-operator',
  templateUrl: './from-event-operator.component.html',
  styleUrls: ['./from-event-operator.component.css']
})
export class FromEventOperatorComponent {

  constructor() { }

  @ViewChild('validate')
  validate: ElementRef = new ElementRef('');
  
  ngOnInit(): void {
    // const btnObservable = fromEvent(this.validate.nativeElement, 'click');

    // btnObservable.subscribe(data => {
    //   console.log(data);
    // });
    
  }
  eventObservable(){
    const btnObservable = fromEvent(this.validate.nativeElement, 'click');

    btnObservable.subscribe(data => {
      console.log(data);
    });
  }
  
}
