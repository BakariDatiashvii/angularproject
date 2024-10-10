import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { environment } from '../environment';
import { FormsModule } from '@angular/forms';

interface Product {
  ProductId: number;
  productName: string;
  barcode: string;
  quantity: number;
  dateOfEntry: string;
}

@Component({
  selector: 'app-update-productgayiduli',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule, InputTextModule, FormsModule],
  templateUrl: './update-productgayiduli.component.html',
  styleUrl: './update-productgayiduli.component.css'
})
export class UpdateProductgayiduliComponent implements OnInit{
  storeProductData: any; // Store product data fetched from API
  id: number | undefined; // Store ID fetched from route parameter

  // Form fields
  productName: string = '';
  barcode: string = '';
  quantity: number | undefined;
  dateOfEntry: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get store ID from route parameters
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id ? Number(id) : undefined;

    
    console.log('Store ID:', this.id); // For debugging
  }

  addProduct(): void {
    if (this.id) {
      const productData: Product = {
        ProductId: this.id,
        productName: this.productName,
        barcode: this.barcode,
        quantity: this.quantity ?? 0, // Default to 0 if undefined
        dateOfEntry: this.dateOfEntry
      };

      this.http.put(`${environment.updateproductsellUrl}`, productData).subscribe(
        (response) => {
          console.log('Product added successfully', response);
          this.resetForm();
          this.router.navigate(['/product-success']); // Ensure this route is defined
        },
        (error) => {
          console.error('Failed to add product', error);
        }
      );
    } else {
      console.error('Store ID is missing for adding a product.');
    }
  }

  resetForm() {
    this.productName = '';
    this.barcode = '';
    this.quantity = undefined;
    this.dateOfEntry = '';
  }
}
