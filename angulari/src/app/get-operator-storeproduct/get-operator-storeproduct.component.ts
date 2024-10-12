import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; // PrimeNG Table Module
import { InputTextModule } from 'primeng/inputtext'; // PrimeNG InputText Module
import { InputIconModule } from 'primeng/inputicon'; // PrimeNG InputIcon Module
import { environment } from '../environment'; // Ensure this path is correct

import { Table } from 'primeng/table';

import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';

import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-get-operator-storeproduct',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule, InputTextModule, InputIconModule,TagModule,IconFieldModule,MultiSelectModule,DropdownModule], // Add PrimeNG modules
  templateUrl: './get-operator-storeproduct.component.html',
  styleUrls: ['./get-operator-storeproduct.component.css']
})
export class GetOperatorStoreproductComponent implements OnInit {
  storeProductData: any; 
  storeId: number | undefined; 
  storeOperatorId: number | undefined; 
  loading: boolean = true; // Initialize loading

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
    this.loading = true; // Set loading to true
    this.http.get<any>(`${environment.getoperatortproductUrl}/${this.storeId}/${this.storeOperatorId}`).subscribe(
      (data) => {
        this.storeProductData = data;
        console.log('Store Product Data:', this.storeProductData);
        this.cd.detectChanges();
      },
      (error) => {
        console.error('Error fetching store product data:', error.message || error);
      },
      () => {
        this.loading = false; // Set loading to false after the request completes
      }
    );
  }

  navigateTupdateproduct(id: number) {
    this.router.navigate([`/shemosuliproductstore/${id}`]);
    console.log(id);
  }

  navigateTupdateproductsell(id: number) {
    this.router.navigate([`/sellproductstore/${id}`]);
    console.log(id);
  }
}
