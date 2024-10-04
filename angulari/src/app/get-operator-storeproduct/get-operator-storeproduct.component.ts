import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; // Import TableModule

@Component({
  selector: 'app-get-operator-storeproduct',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule],
  templateUrl: './get-operator-storeproduct.component.html',
  styleUrl: './get-operator-storeproduct.component.css'
})
export class GetOperatorStoreproductComponent implements OnInit {
  storeProductData: any;
  storeId: number | undefined; // Store ID fetched from route parameter
  storeOperatorId: number | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute, private cd: ChangeDetectorRef,private router: Router) {}

  ngOnInit(): void {
    const storeIdParam = this.route.snapshot.paramMap.get('id');

    const storeOperatorIdParam = this.route.snapshot.paramMap.get('storeOperatorId');
  
    // Convert the parameters to numbers if they are not null
    this.storeId = storeIdParam ? Number(storeIdParam) : undefined;
    this.storeOperatorId = storeOperatorIdParam ? Number(storeOperatorIdParam) : undefined;
  
    // Check if both values are defined before making the API call
    if (this.storeId && this.storeOperatorId) {
      this.fetchStoreProductData();
    } else {
      console.error('Store ID or Store Operator ID is missing.');
    }
    
  }

  // Fetch store products by manager
  fetchStoreProductData() {
    this.http.get<any>(`http://localhost:5133/api/Employee/operatorgetall/${this.storeId}/${this.storeOperatorId}`).subscribe(
        (data) => {
            this.storeProductData = data;
            console.log('Store Product Data:', this.storeProductData);
            this.cd.detectChanges(); // Force change detection
        },
        (error) => {
            console.error('Error fetching store product data', error);
        }
    );

    
}


navigateTupdateproduct(id: number) {
      this.router.navigate([`/shemosuliproductstore/${id}`]);

     
    }
}




