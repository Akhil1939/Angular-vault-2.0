import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css']
})
export class OfOperatorComponent implements OnInit{

 agents:Observable<string> | undefined;
 agentName: string="";
studentList:string[]=["Raj","Ravi","Ramesh","Rajesh"];
 students:Observable<string[]> = of(this.studentList);

 ngOnInit(): void {
  this.students.subscribe(data=>{
    console.log(data);
  }
  );
 
   
 }
 AddStudent(){

    this.studentList.push("ram");
    console.log(this.studentList);
 }
}
