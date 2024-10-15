import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from '../environment';
import { DataServiceService } from "../data-servise"


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

  constructor(private fb: FormBuilder, private dataService: DataServiceService,private router: Router) {
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

  onSubmit(): void {
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      this.dataService.registercreate(this.registrationForm.value).subscribe({
        next: () => {
          this.router.navigate(['/']);
         
        },
        error: (error) => {
          console.log(error);
         if(error.error){
          alert('invalid form!')
         }
        },
      })
    } else {
      console.log('Form is invalid');
    }
  }

  
  
  navigateToRegister() {
    this.router.navigate(['/']);
  }
}
