import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:5133/api"



  registercreate(data: any) {
    return this.http.post<any>(`${this.url}/Employee/create`, data);
  }
  registerlogin(data: any) {
    return this.http.post<any>(`${this.url}/Employee/login`, data);
  }
  registermanageroperator(data: any) {
    return this.http.post<any>(`${this.url}/Employee/register-managerandoperator`, data);
  }
  getalluser(data: any) {
    return this.http.get<any>(`${this.url}/Employee/get-all-users`, data);
  }
  getuserbyid(data: any , id:number) {
    return this.http.post<any>(`${this.url}/Employee/get-user-by-id/${id}`, data);
  }
  deleteuserid(id: number): Observable<string> {
    return this.http.delete(`${this.url}/Employee/delete/${id}`, { responseType: 'text' });
  }
  
  updateuser(data: any): Observable<string> {
    return this.http.post<string>(`${this.url}/Employee/update-user`, data, { responseType: 'text' as 'json' });
  }
  
  registeraddstore(data: any)  {
    return this.http.post<any>(`${this.url}/Employee/add-store`, data);
  }
  getallstoresmanagerid(data: any, managerID:number) {
    return this.http.get<any>(`${this.url}/Employee/get-all-stores/${managerID}`, data);
  }
  getcarielistorebyoperator(data: any) {
    return this.http.get<any>(`${this.url}/Employee/carielisawyobebi-operatorisregistraciistvis`, data);
  }
  registerproductoperator(data: any) {
    return this.http.post<any>(`${this.url}/Employee/add-product-opretor`, data);
  }
  updateproduct(data: any) {
    return this.http.post<any>(`${this.url}/Employee/update-producte`, data);
  }
  updateproductsell(data: any) {
    return this.http.post<any>(`${this.url}/Employee/update-productSell`, data);
  }
  getoperatorall(data: any,storeId:number,storeOperatorId:number) {
    return this.http.get<any>(`${this.url}/Employee/operatorgetall/${storeId}/${storeOperatorId}`, data);
  }
  getoperatorproduct(data: any,storeOperatorId :number) {
    return this.http.get<any>(`${this.url}/Employee/operatorproduct/${storeOperatorId}`, data);
  }
  getmanagerall(data: any,storeId:Number) {
    return this.http.get<any>(`${this.url}/Employee/managergetall/${storeId}`, data);
  }
}
