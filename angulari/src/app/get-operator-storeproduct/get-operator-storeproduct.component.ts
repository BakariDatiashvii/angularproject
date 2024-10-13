import { Component, OnInit, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; // PrimeNG Table Module
import { InputTextModule } from 'primeng/inputtext'; // PrimeNG InputText Module
import { environment } from '../environment'; // Ensure this path is correct
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-get-operator-storeproduct',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    MultiSelectModule,
    DropdownModule,
    TagModule
  ], // PrimeNG modules added
  templateUrl: './get-operator-storeproduct.component.html',
  styleUrls: ['./get-operator-storeproduct.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GetOperatorStoreproductComponent implements OnInit {
  storeProductData: any; // Data for store products
  storeId: number | undefined; // Store ID
  storeOperatorId: number | undefined; // Store Operator ID
  loading: boolean = true; // Loading state

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
      this.loading = false;
    }
  }

  fetchStoreProductData(): void {
    this.loading = true; // Set loading to true when data fetching starts
    this.http
      .get<any>(`${environment.getoperatortproductUrl}/${this.storeId}/${this.storeOperatorId}`)
      .subscribe(
        (data) => {
          this.storeProductData = data;
          console.log('Store Product Data:', this.storeProductData);
          this.loading = false; // Set loading to false when data is fetched
          this.cd.detectChanges();
        },
        (error) => {
          console.error('Error fetching store product data:', error.message || error);
          this.loading = false; // Set loading to false on error
        }
      );
  }

  navigateTupdateproduct(id: number): void {
    this.router.navigate([`/shemosuliproductstore/${id}`]);
    console.log('Navigate to update product:', id);
  }

  navigateTupdateproductsell(id: number): void {
    this.router.navigate([`/sellproductstore/${id}`]);
    console.log('Navigate to update sold product:', id);
  }
}
