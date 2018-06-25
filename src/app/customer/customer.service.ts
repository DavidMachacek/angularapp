import { Injectable } from '@angular/core';
import { Customer } from './customer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";

@Injectable()
export class CustomerService {
 
  private apiUrl = 'http://localhost:8080/api/customers';
 
  constructor(private http: Http) {
  }
 
  findAll(): Observable<Customer[]>  {
    return this.http.get(this.apiUrl)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
 
  findById(id: number): Observable<Customer> {
    return null;
  }
 
  saveUser(customer: Customer): Observable<Customer> {
    return null;
  }
 
  deleteUserById(id: number): Observable<boolean> {
    return null;
  }
 
  updateUser(customer: Customer): Observable<Customer> {
    return null;
  }
 
}