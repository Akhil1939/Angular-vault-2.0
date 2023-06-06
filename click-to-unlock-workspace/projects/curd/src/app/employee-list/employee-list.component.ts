import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../Services/employee.service';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeServices) { }
  employees : Employee[] = [];  
  
  ngOnInit(): void {

  this.employeeService.GetEmployee().subscribe((data:Employee[])=>{
  this.employees = data;
  });
}
}
