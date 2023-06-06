import { Component } from '@angular/core';
import { EmployeeServices } from '../Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor(private employeeService:EmployeeServices) { }
  employees = this.employeeService.GetEmployee(); 
}
