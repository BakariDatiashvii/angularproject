import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; // Import TableModule

@Component({
  selector: 'app-get-manager-storeproduct',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule], // Add TableModule here
  templateUrl: './get-manager-storeproduct.component.html',
  styleUrls: ['./get-manager-storeproduct.component.css'] // Corrected styleUrl to styleUrls
})
export class GetManagerStoreproductComponent implements OnInit {
  storeProductData: any;
  storeId: number | undefined; // Store ID fetched from route parameter

  constructor(private http: HttpClient, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Get store ID from route parameters
    this.storeId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchStoreProductData();
  }

  // Fetch store products by manager
  fetchStoreProductData() {
    this.http.get<any>(`http://localhost:5133/api/Employee/managergetall/${this.storeId}`).subscribe(
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
}
