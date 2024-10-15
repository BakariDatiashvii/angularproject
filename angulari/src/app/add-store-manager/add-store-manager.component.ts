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



  constructor(private fb: FormBuilder, private dataService: DataServiceService,  private router: Router) {
    

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

  onSubmit(): void {
    
    this.isSubmitted = true;
    if (this.registrationForm.valid) {
      this.dataService.registeraddstore(this.registrationForm.value).subscribe({
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
  onRoleChange(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedNumber = Number(selectedValue);
    console.log('Selected value:', selectedNumber);
     // Convert to a number if needed
  }
  
}
