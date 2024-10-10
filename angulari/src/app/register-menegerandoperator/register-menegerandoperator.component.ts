import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import axios from "axios"
import { environment } from '../environment';

@Component({
  selector: 'app-register-menegerandoperator',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    NgIf
  ],
  templateUrl: './register-menegerandoperator.component.html',
  styleUrls: ['./register-menegerandoperator.component.css']
})
export class RegisterMenegerandoperatorComponent implements OnInit {

  alluser: any[] = [];
  compid: number = 0;
  transformedUsers: { id: number, storeName: string }[] = [];  // For transformed data
   
  registrationForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
      FirsName: [''],
      LastName: [''],
      Email: ['', Validators.required],
      PhoneNumber: ['', Validators.required],
      companyid: ['', Validators.required],
      sawyobiID: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    axios.get("http://localhost:5133/api/Employee/carielisawyobebi-operatorisregistraciistvis")
      .then((x) => {
        // Assign the fetched data to alluser
        this.alluser = x.data;

        let roleData = localStorage.getItem("role");
        if (roleData) {
          let t = JSON.parse(roleData);
          this.compid =t.CompanyID
          
          console.log(this.compid );
          
        }

        // Apply map() to transform the data if needed
        this.transformedUsers = this.alluser.map(user => ({
          id: user.id,
          storeName: user.storeName
        }));

        console.log(this.transformedUsers);  // Log the transformed data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      // Call the service to register the organization
      console.log('Registration successful', this.registrationForm.value);
      await axios.post(`${environment.registermanagerandoperatorUrl}`, this.registrationForm.value)
        .then((x) => {
          console.log(x.data);
        })
        .catch((error) => {
          console.error('Error registering:', error);
        });
    } else {
      console.log('Form is invalid');
    }
  }

  onRoleChange(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedNumber = Number(selectedValue);
    console.log('Selected value:', selectedNumber);
  }

}
