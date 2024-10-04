import { Component } from '@angular/core';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DividerModule, ButtonModule, InputTextModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Fixed property name
})

export class LoginComponent {
  authorizationForm: FormGroup;
  title = 'angulari';

  constructor(private fb: FormBuilder ,private router: Router) {

    this.authorizationForm = this.fb.group({
      
      Username: ['', Validators.required],
      Password: ['', Validators.required]
    });

  }
  async onSubmit() {

    // if (this.authorizationForm.valid) {
      // console.log('Registration successful', this.authorizationForm.value);
      await axios.post("http://localhost:5133/api/Employee/login",this.authorizationForm.value).then((x) => {
        console.log(x.data);

        const token = x.data.token;
        const companyID = x.data.companyID;

        console.log(token);

        // Decode the token
        const jwttoken = JSON.stringify(jwt_decode.jwtDecode(token)); // Correct usage

        console.log(jwttoken);
        
        
        if (jwttoken ){

          localStorage.setItem("role" , jwttoken)
          localStorage.setItem("token" , token)
          localStorage.setItem("companyID", companyID);


          this.router.navigate(['/usersmanagement']);

        }else{
          return alert("arasworia momxmareblis saxeli an paroli")
        }
      
        
      });

    // }

  }

  navigateToLogin() {
    this.router.navigate(['/register']);
  }




}


