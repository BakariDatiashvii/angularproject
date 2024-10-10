import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; // PrimeNG Table Module
import { InputTextModule } from 'primeng/inputtext'; // PrimeNG InputText Module
import { environment } from '../environment'; // Ensure this path is correct
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-add-operator-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule, InputTextModule, FormsModule],
  templateUrl: './add-operator-product.component.html',
  styleUrl: './add-operator-product.component.css'
})
export class AddOperatorProductComponent implements OnInit {

  storeProductData: any; // Store product data fetched from API
  storeId: number | undefined; // Store ID fetched from route parameter
  storeOperatorId: number | undefined; // Store operator ID fetched from route parameter

  // Form fields
  productName: string = '';
  barcode: string = '';
  quantity: number | undefined;
  dateOfEntry: string = ''; // You can manage date formatting separately

  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute, 
    private cd: ChangeDetectorRef, 
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get route parameters (storeId and storeOperatorId)
    const storeIdParam = this.route.snapshot.paramMap.get('id');
    const operatorIdParam = this.route.snapshot.paramMap.get('storeOperatorId');
    
    // Convert the parameters to numbers if they are not null
    this.storeId = storeIdParam ? Number(storeIdParam) : undefined;
    this.storeOperatorId = operatorIdParam ? Number(operatorIdParam) : undefined;
  }

  // Function to handle form submission for adding a product
  addProduct(): void {
    if (this.storeId && this.storeOperatorId) {
      const productData = {
        storeId: this.storeId,
        operatorId: this.storeOperatorId,
        productName: this.productName,
        barcode: this.barcode,
        quantity: this.quantity,
        dateOfEntry: this.dateOfEntry
      };

      this.http.post(`${environment.addProductUrl}`, productData).subscribe(
        (response) => {
          console.log('Product added successfully', response);
          // Redirect or perform another action on success
          this.router.navigate(['/product-success']);
        },
        (error) => {
          console.error('Failed to add product', error);
        }
      );
    } else {
      console.error('Store ID or Store Operator ID is missing for adding a product.');
    }
  }
}
