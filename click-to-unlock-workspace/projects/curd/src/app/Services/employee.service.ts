import { Injectable } from '@angular/core';
import { Employee, UpdateEmployee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeServices {
  constructor(private http: HttpClient) {}

  GetEmployee(): Observable<Employee[]> {
   
    return this.http.get<Employee[]>('https://localhost:7292/api/Employees');
  }
  
  GetEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(
      'https://localhost:7292/api/Employees/' + id
    );
  }

  //add Employee
    AddEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>('https://localhost:7292/api/Employees', employee);
    }


//update Employee
    UpdateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>('https://localhost:7292/api/Employees/' + employee.empId, employee);
    }

//delete Employee
    DeleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>('https://localhost:7292/api/Employees/' + id);
    }
}
