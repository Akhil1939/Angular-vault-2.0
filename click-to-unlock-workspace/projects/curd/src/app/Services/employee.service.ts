import { Injectable } from "@angular/core";
import { Employee } from "../models/employee.model";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
    providedIn:'root'
})
export class EmployeeServices{

    constructor(private http:HttpClient){}

    GetEmployee():Observable<Employee[]>{
        // return [
        //     {id:1,name:'Rahul',email:'',phone:1234567890,salary:10000,department:'IT'},
        //     {id:2,name:'Raj',email:'',phone:1234567890,salary:10000,department:'IT'},
        //     {id:3,name:'Ravi',email:'',phone:1234567890,salary:10000,department:'IT'},
        //     {id:4,name:'Rohit',email:'',phone:1234567890,salary:10000,department:'IT'}
        // ];
        return this.http.get<Employee[]>('https://localhost:7292/api/Employees');
        
        
    }
        GetEmployeeById(id:number):Observable<Employee>{
            return this.http.get<Employee>('https://localhost:7292/api/Employees/'+id);
        }
}