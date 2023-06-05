import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http:HttpClient) { }

  users(){
    return this.http.get('https://dummyjson.com/products')
  }

  AddProductData(data:any){
    return this.http.post('https://dummyjson.com/products/add',data)
  }
}
