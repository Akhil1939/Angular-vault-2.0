import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { from } from 'rxjs/internal/observable/from';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.css']
})
export class FromOperatorComponent implements OnInit {
studentList:string[]=["Raj","Ravi","Ramesh","Rajesh"];

students:Observable<string> = from(this.studentList);

ngOnInit(): void {
  this.students.subscribe(data=>{
    console.log(data);
  }
  );
 

}
AddStudent(){

  this.studentList.push("ram");
}
}
