import { Component } from '@angular/core';
import { Observable, from, interval } from 'rxjs';

@Component({
  selector: 'app-interval-operator',
  templateUrl: './interval-operator.component.html',
  styleUrls: ['./interval-operator.component.css']
})
export class IntervalOperatorComponent {

  studentsList:string[]=["Raj","Ravi","Ramesh","Rajesh"];
  constructor() { }
  students:Observable<string> = from(this.studentsList);
  ngOnInit(): void {
    this.students.subscribe(data=>{
      const seqNumber = interval(1000);

      seqNumber.subscribe(data=>{
        console.log(data);
      });

      console.log(data);
    }
    );
  }
}
