import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { DataServiceService } from "../data-servise"


@Component({
  selector: 'app-updage-register-managerandoperator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    NgIf,
    HttpClientModule // Include HttpClientModule here
  ],
  templateUrl: './updage-register-managerandoperator.component.html',
  styleUrls: ['./updage-register-managerandoperator.component.css']
})
export class UpdageRegisterManagerandoperatorComponent {

  //private apiUrl = 'http://localhost:5133/api/Employee/get-user-by-id';
  //private apiUrlmanager = 'http://localhost:5133/api/Employee/get-all-stores';

  registrationForm: FormGroup;
  isSubmitted = false;
  userId: number = 185;
  alluser: any[] = [];


  constructor(private fb: FormBuilder, private dataService: DataServiceService, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.registrationForm = this.fb.group({

      UserId: ['', Validators.required],
      NameEmployee: ['', Validators.required],
      LastEmployee: [''],
      Email: ['', Validators.required],
      PhoneNumber: ['', Validators.required]

    });
  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const { id } = params;
      this.userId = id;

      console.log('Route ID:', id);
    });

    this.getAllUsers(this.userId).subscribe(
      (data: any[]) => {
        this.alluser = data
        this.fillFormWithUserData(0)
        console.log(data);
      },
      (error: any) => {
        console.error('Error fetching users', error);
      }
    );
  }
  fillFormWithUserData(index: number): void {
    const userData = this.alluser[index];

    this.registrationForm.patchValue({

      UserId: userData.userId,
      // username1:userData.username,
      Password: userData.nameEmployee,
      // CompanyName:userData.companyName,
      NameEmployee: userData.nameEmployee,
      LastEmployee: userData.lastEmployee,
      Email: userData.email,
      PhoneNumber: userData.phoneNumber

    });
  }

  onSubmit() {
    // console.log(this.userId);
    //   console.log(this.registrationForm.value);
    this.isSubmitted = true;
    if (this.registrationForm.valid) {

      // Call the service to register the organization
      // console.log(this.userId);
      // console.log(this.registrationForm.value);
      this.dataService.updateuser(this.registrationForm.value).subscribe({
        next:(x)=>{
          console.log(x);
          this.router.navigate(['/usersmanagement']);
        },
        error: (error) => {
          console.log(error);
         if(error.error){
          alert('invalid form!')
         }
        },
      })

    } 
  }

  getAllUsers(userId: number): Observable<any> {
    return this.http.get<any>(`${environment.getuserbyidUrl}?userId=${userId}`);
  }

  getManager(managerID: number): Observable<any> {
    return this.http.get<any>(`${environment.getallstoresUrl}/${managerID}`);
  }

  onRoleChange(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedNumber = Number(selectedValue);
    console.log('Selected value:', selectedNumber);
  }
}