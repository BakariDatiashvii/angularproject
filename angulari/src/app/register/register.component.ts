import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import axios from "axios"
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Add ReactiveFormsModule here
    DividerModule,
    ButtonModule,
    InputTextModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Fixed the property name to "styleUrls"
})
export class RegisterComponent {
  
  registrationForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registrationForm = this.fb.group({
      NameOrganization: ['', Validators.required],
      OrganizationAddress: ['', Validators.required],
      Email: [''],
      PhoneNumber: [''],
      Username: ['', Validators.required],
      Password: ['', Validators.required],
      NameEmployee: ['', Validators.required],
      lastEmployee: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      // Call the service to register the organization
      console.log('Registration successful', this.registrationForm.value);
      await axios.post("http://localhost:5133/api/Employee/create",this.registrationForm.value).then(()=>{
        this.router.navigate(['/']);
      })
      // Perform your backend call here to save the organization
    } else {
      console.log('Form is invalid');
    }
  }

  
}
