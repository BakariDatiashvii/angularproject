import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from '../environment'; // Ensure this path is correct
import { InputIconModule } from 'primeng/inputicon';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-get-manager-storeproduct',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule, InputTextModule,CommonModule, HttpClientModule, TableModule, InputTextModule, InputIconModule,TagModule,IconFieldModule,MultiSelectModule,DropdownModule], // Import necessary PrimeNG modules
  templateUrl: './get-manager-storeproduct.component.html',
  styleUrls: ['./get-manager-storeproduct.component.css']
})
export class GetManagerStoreproductComponent implements OnInit {
  storeProductData: any; 
  storeId: number | undefined; 
  loading: boolean = true; // Add loading state to handle async data fetching

  constructor(private http: HttpClient, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.storeId = Number(this.route.snapshot.paramMap.get('id')); // Get store ID from the route parameter
    if (this.storeId) {
      this.fetchStoreProductData();
    } else {
      console.error('Store ID is missing.');
    }
  }

  fetchStoreProductData() {
    this.http.get<any>(`${environment.getmanagerstoreproductUrl}/${this.storeId}`).subscribe(
      (data) => {
        this.storeProductData = data;
        console.log('Store Product Data:', this.storeProductData);
        this.loading = false; // Set loading to false once data is fetched
        this.cd.detectChanges();
      },
      (error) => {
        console.error('Error fetching store product data', error);
        this.loading = false; // Set loading to false if there's an error
      }
    );
  }
}
