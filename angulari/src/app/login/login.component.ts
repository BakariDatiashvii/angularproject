import { Component } from '@angular/core';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../environment';
import { DataServiceService } from "../data-servise"
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DividerModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed property name
})

export class LoginComponent {
  authorizationForm: FormGroup;
  title = 'angulari';

  constructor(private fb: FormBuilder, private dataService: DataServiceService, private router: Router) {

    this.authorizationForm = this.fb.group({

      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });

  }
  onSubmit(): void {
    if (this.authorizationForm.valid) {
      this.dataService.registerlogin(this.authorizationForm.value).subscribe({
        next: (response) => {
          console.log(response);

          const token = response.token;
          const companyID = response.companyID;

          console.log(token);

          // Decode the token
          const jwttoken = JSON.stringify(jwt_decode.jwtDecode(token)); // Correct usage

          console.log(jwttoken);


          if (jwttoken) {

            localStorage.setItem("role", jwttoken)
            localStorage.setItem("token", token)
            localStorage.setItem("companyID", companyID);


            this.router.navigate(['/usersmanagement']);

          }
        },
        error: (error) => {
          console.log(error);
         if(error.error){
          alert('მომხმარებელი ან პაროლი არასწორია')
         }
        },
      })
    }


    // if (this.authorizationForm.valid) {
    // console.log('Registration successful', this.authorizationForm.value);


    // }

  }

  navigateToLogin() {
    this.router.navigate(['/register']);
  }




}


