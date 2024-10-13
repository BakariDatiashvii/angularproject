
import { Component, OnInit, Type } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import axios from 'axios';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, HttpClientModule, CommonModule,ButtonModule],
  templateUrl: './users-management.component.html',
  styleUrl: './users-management.component.css',

})
export class UsersManagementComponent implements OnInit {


  alluser: any[] = [];
  role: any[] = [];
  companyId: number = 0; // Set your company ID here
  operatorid: number = 0;
  managerID: number = 0;

  private apiUrl = 'http://localhost:5133/api/Employee/get-all-users';
  private apiUrlmanager = 'http://localhost:5133/api/Employee/get-all-stores';
  private apiUrloperator = 'http://localhost:5133/api/Employee/operatorproduct';
  

  // Define the roles array
  roles = [
    { value: 'admin', label: 'Administrator' }
  ];

  // Inject HttpClient and Router in a single constructor
  constructor(private http: HttpClient, private router: Router) {}




  ngOnInit(): void {  
    let roleData = localStorage.getItem("role");
    
    if (roleData) {
      let t = JSON.parse(roleData);
      this.companyId = t.CompanyID
      this.operatorid = t.operatorID
      this.managerID = t.managerID

      console.log(t.operatorID);
      if(t.roleKay == 0){
        this.getAllUsers(this.companyId).subscribe(
          (data: any[]) => {
            this.role = t.roleKay;
            this.alluser = data;
            console.log(data);
          },
          (error: any) => {
            console.error('Error fetching users', error);
          }
        );
      } else if(t.roleKay == 1){
        this.getManager(this.managerID).subscribe(
          (data: any[]) => {
            this.role = t.roleKay;
            this.alluser = data;
            console.log(data);
          },
          (error: any) => {
            console.error('Error fetching users', error);
          }
        );
      } else if(t.roleKay == 2){
        this.getOperator(this.operatorid).subscribe(
          (data: any) => {
              this.role = t.roleKay;
              this.alluser = Array.isArray(data) ? data : [data]; // Wrap in an array if not already
              console.log(this.alluser);
          },
          (error: any) => {
              console.error('Error fetching users', error);
          }
  
        );
      } else {
        console.log("Error: Invalid role.");
      }
    } else {
      console.log("Role not found in local storage.");
    }
  }

  deletefunct(userid: number) {
    axios.delete(`http://localhost:5133/api/Employee/delete/${userid}`).then((x) => {
      alert(x.data);
      this.ngOnInit();  // Refresh the data after deletion
    });
  }

  getAllUsers(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?CompanyId=${companyId}`);
  }

  getManager(managerID: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrlmanager}/${managerID}`);
  }


  getOperator(operatorid : number): Observable<any> {
    return this.http.get<any>(`${this.apiUrloperator}/${operatorid }`);
  }

  // Navigation methods using the injected Router
  navigateToLogin() {
    this.router.navigate(['/register']);  // Ensure the route matches your app routing configuration
  }

  navigateToregisterandlogin() {
    this.router.navigate(['/registermanagerandoperator']);  // Ensure the route matches your app routing configuration
  }
  
 navigateUpdateToregisterandlogin(userid: number){
  this.router.navigate([`/registerupdatemanagerandoperator/${userid}`]);
 }

 navigateToGetoperatorstore(id: number, storeOperatorId: number) {
  this.router.navigate([`/getoperatorstore/${id}/${storeOperatorId}`]);
}


navigateToaddoperatorproduct(id: number, storeOperatorId: number) {
  this.router.navigate([`/addproductoperator/${id}/${storeOperatorId}`]);
}



 navigateToregisterstore(){
  this.router.navigate(['/registerupdatemanagerstore']);
 }


 


 navigateToGetmanagerstore(id: number){
  this.router.navigate([`/navigateToGetmanagerstorepr/${id}`])
  console.log(id)
 }
 logout(): void {
  console.log('Logout initiated'); 

  // Remove token or any user-related information from local storage
  localStorage.removeItem('token');
  
  // Optional: Clear session storage if used
  sessionStorage.clear();

  // Confirm token is removed
  console.log('Token after clearing:', localStorage.getItem('token')); 

 
  this.router.navigate(['/']);
}
  
}     


