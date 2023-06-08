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
      const seqNumber = interval(200);

      seqNumber.subscribe(num=>{
        console.log(data + num);
      });

      console.log(data);
    }
    );
  }
}
