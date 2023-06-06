import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../Services/employee.service';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormControlName,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-employee-upsert',
  templateUrl: './employee-upsert.component.html',
  styleUrls: ['./employee-upsert.component.css'],
})
export class EmployeeUpsertComponent implements OnInit {
  employee: Employee = {
    empId: 0,
    empName: '',
    empEmail: '',
    empMobile: 0,
    empSalary: 0,
    department: '',
  };
  strEmp:string='';

  AddEmpForm!: FormGroup;
  isUpdateMode: boolean = false;

  constructor(private employeeServices: EmployeeServices) {}

  ngOnInit(): void {
    const employeeId = this.getEmployeeIdFromUrl();
    if (employeeId) {
      this.isUpdateMode = true;
      this.loadEmployeeData(employeeId);
    }
    this.initializeForm();
  }

  getEmployeeIdFromUrl(): number | null {
    const url = window.location.toString();
    const matches = url.match(/\/employee\/(\d+)/);
    if (matches && matches[1]) {
      return parseInt(matches[1], 10);
    }
    return null;
  }

  loadEmployeeData(employeeId: number): void {
    this.employeeServices
      .GetEmployeeById(employeeId)
      .subscribe((data: Employee) => {
        this.employee = data;
        this.AddEmpForm.patchValue(this.employee);
        this.strEmp = JSON.stringify(this.employee);
      });
  }
  initializeForm(): void {
    this.AddEmpForm = new FormGroup({
      empId: new FormControl(this.employee.empId),
      empName: new FormControl(this.employee.empName, Validators.required),
      empEmail: new FormControl(this.employee.empEmail, Validators.required),
      empMobile: new FormControl(this.employee.empMobile),
      empSalary: new FormControl(this.employee.empSalary, Validators.required),
      department: new FormControl(
        this.employee.department,
        Validators.required
      ),
    });
  }

  saveEmployee(): void {
    if (this.AddEmpForm.valid) {
      const employeeData: Employee = this.AddEmpForm.value;
      if (this.isUpdateMode) {
        this.updateEmployee(employeeData);
      } else {
        this.addEmployee(employeeData);
      }
    }
  }
  addEmployee(employeeData: Employee): void {
    // this.employeeServices.addEmployee(employeeData).subscribe((response) => {
    //   // Handle success or error response
    // }
    // );
  }

  updateEmployee(employeeData: Employee): void {
    // this.employeeServices.updateEmployee(employeeData).subscribe((response) => {
    //   // Handle success or error response
    // }
    // );
  }
}

// constructor(private employeeServices:EmployeeServices) { }
// employee:Employee = {empId:0,empName:'',empEmail:'',empMobile:0,empSalary:0,department:''} ;

// strEmp:string = '';
// url:string = window.location.toString();
// matches = this.url.match(/\/employee\/(\d+)/) ?? [];

// AddEmpForm = new FormGroup({
//   empId:new FormControl(this.employee.empId),
//   empName:new FormControl(this.employee.empName,Validators.required),
//   empEmail:new FormControl(this.employee.empEmail,Validators.required),
//   empMobile:new FormControl(this.employee.empMobile),
//   empSalary:new FormControl(this.employee.empSalary,Validators.required),
//   department:new FormControl(this.employee.department,Validators.required)
// });

// ngOnInit(): void {

//   this.employeeServices.GetEmployeeById(parseInt(this.matches[1], 10)).subscribe((data:Employee)=>{
//     this.employee = data;
//     this.strEmp = JSON.stringify(this.employee);

//     this.AddEmpForm = new FormGroup({
//       empId:new FormControl(this.employee.empId),

//       empName:new FormControl(this.employee.empName,Validators.required),
//       empEmail:new FormControl(this.employee.empEmail,Validators.required),
//       empMobile:new FormControl(this.employee.empMobile),
//       empSalary:new FormControl(this.employee.empSalary,Validators.required),
//       department:new FormControl(this.employee.department,Validators.required)
//     })

//   });

// }
