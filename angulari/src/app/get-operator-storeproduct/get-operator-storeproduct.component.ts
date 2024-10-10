import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; // PrimeNG Table Module
import { InputTextModule } from 'primeng/inputtext'; // PrimeNG InputText Module
import { environment } from '../environment'; // Ensure this path is correct
import { InputIconModule } from 'primeng/inputicon';


@Component({
  selector: 'app-get-operator-storeproduct',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule, InputTextModule,InputIconModule], // Add PrimeNG modules
  templateUrl: './get-operator-storeproduct.component.html',
  styleUrls: ['./get-operator-storeproduct.component.css'] ,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  // Corrected styleUrls
})
export class GetOperatorStoreproductComponent implements OnInit {
  storeProductData: any; 
  storeId: number | undefined; 
  storeOperatorId: number | undefined; 

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute, 
    private cd: ChangeDetectorRef, 
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Component initialized');
    const storeIdParam = this.route.snapshot.paramMap.get('id');
    const storeOperatorIdParam = this.route.snapshot.paramMap.get('storeOperatorId');
    
    this.storeId = storeIdParam ? Number(storeIdParam) : undefined;
    this.storeOperatorId = storeOperatorIdParam ? Number(storeOperatorIdParam) : undefined;
  
    console.log(`Store ID: ${this.storeId}, Store Operator ID: ${this.storeOperatorId}`);

    if (this.storeId && this.storeOperatorId) {
      this.fetchStoreProductData();
    } else {
      console.error('Store ID or Store Operator ID is missing.');
    }
  }

  fetchStoreProductData(): void {
    this.http.get<any>(`${environment.getoperatortproductUrl}/${this.storeId}/${this.storeOperatorId}`).subscribe(
      (data) => {
        this.storeProductData = data;
        console.log('Store Product Data:', this.storeProductData);
        this.cd.detectChanges();
      },
      (error) => {
        console.error('Error fetching store product data:', error.message || error);
      }
    );
  }

  navigateTupdateproduct(id: number) {
    this.router.navigate([`/shemosuliproductstore/${id}`]);
    console.log(id)
  }

  navigateTupdateproductsell(id: number) {
    this.router.navigate([`/sellproductstore/${id}`]);
    console.log(id)
  }


  
}
