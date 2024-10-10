import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import axios from "axios"
import { environment } from '../environment';

@Component({
  selector: 'app-add-store-manager',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule,  // Add ReactiveFormsModule here
    DividerModule,
    ButtonModule,
    InputTextModule,
    NgIf],
  templateUrl: './add-store-manager.component.html',
  styleUrl: './add-store-manager.component.css'
})
export class AddStoreManagerComponent {
  registrationForm: FormGroup;
  isSubmitted = false;



  constructor(private fb: FormBuilder, private router: Router) {
    

    let mainmanagerid 

    let managerid = localStorage.getItem("role")
    if(managerid){

      let managerid1 = JSON.parse(managerid)
      mainmanagerid = managerid1.managerID
    }
    this.registrationForm = this.fb.group({
      storename: ['', Validators.required],
      storeadress: ['', Validators.required],
      managerID: [mainmanagerid, Validators.required]
    });
  }

  async onSubmit() {
    
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      // Call the service to register the organization
      console.log('Registration successful', this.registrationForm.value);
      await axios.post(`${environment.addstoreapiUrl}/add-store`,this.registrationForm.value).then((x)=>{
        // this.router.navigate(['/']);
        console.log(x.data);
        
      })
      // Perform your backend call here to save the organization
    } else {
      console.log('Form is invalid');
    }
  }
  onRoleChange(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedNumber = Number(selectedValue);
    console.log('Selected value:', selectedNumber);
     // Convert to a number if needed
  }
  
}
