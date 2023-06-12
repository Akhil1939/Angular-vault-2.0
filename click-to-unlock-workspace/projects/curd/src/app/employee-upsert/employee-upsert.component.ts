import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../Services/employee.service';
import { Employee, UpdateEmployee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormControlName,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
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
    empDeptId: 0,
  };
  strEmp: string = '';

  AddEmpForm!: FormGroup;
  isUpdateMode: boolean = false;

  constructor(private employeeServices: EmployeeServices, public router:Router) {}

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
        this.AddEmpForm.get('department')?.setValue(this.employee.empDeptId);
        console.log(this.employee.empDeptId);
        // this.strEmp = JSON.stringify(this.employee);
      });
  }
  initializeForm(): void {
    this.AddEmpForm = new FormGroup({
      empId: new FormControl(this.employee.empId),
      empName: new FormControl(this.employee.empName, Validators.required),
      empEmail: new FormControl(this.employee.empEmail, Validators.required),
      empMobile: new FormControl(this.employee.empMobile),
      empSalary: new FormControl(this.employee.empSalary, Validators.required),
      empDeptId: new FormControl(this.employee.empDeptId, Validators.required),
    });
  }

  saveEmployee(): void {
    console.log(this.isUpdateMode);
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
    this.employeeServices.AddEmployee(employeeData).subscribe((response) => {
      console.log(response)
this.router.navigate(['/employee-list']);
    });
    
  }

  updateEmployee(employeeData: Employee): void {
    this.employeeServices.UpdateEmployee(employeeData).subscribe((response) => {
      console.log(response)
      this.router.navigate(['/employee-list']);
    });
   
  }

  DeleteEmployee(id:number): void {
    this.employeeServices.DeleteEmployee(id).subscribe((response) => {
      console.log(response)
    });
   
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
