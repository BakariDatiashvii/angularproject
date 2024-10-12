// src/app/service/customerservice.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge(): Promise<Customer[]> {
    return this.http.get<Customer[]>('path-to-api/customers')
      .toPromise()
      .then(customers => customers ?? []); // Use empty array if undefined
  }
}
