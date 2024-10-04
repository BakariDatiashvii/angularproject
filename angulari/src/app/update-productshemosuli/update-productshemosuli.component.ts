import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-update-productshemosuli',
  standalone: true,
  imports: [
    HttpClientModule,
    ReactiveFormsModule
  ],
  templateUrl: './update-productshemosuli.component.html',
  styleUrls: ['./update-productshemosuli.component.css']
})
export class UpdateProductshemosuliComponent implements OnInit {
  updateProductForm: FormGroup;
  ID : number | undefined;
  private apiUrl = 'http://localhost:5133/api/Employee/update-product';


  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.updateProductForm = this.fb.group({
      productId: [0],
      barcode: [''],
      productName: ['', Validators.required],
      quantity: [null, [Validators.required, Validators.min(1)]],
      dateOfEntry: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  
    this.ID = Number(this.route.snapshot.paramMap.get('id'));
    
  }

  loadProductDetails(id: number) {
    this.http.get<any>(`${this.apiUrl}/${id}`).subscribe(
      product => {
        if (product) {
          this.updateProductForm.patchValue({
            productId: this.ID,
            barcode: product.barcode,
            productName: product.productName,
            quantity: product.quantity,
            dateOfEntry: product.dateOfEntry
          });
        } else {
          console.error('No product data available for ID:', id);
          alert('No product data available for the given ID');
          this.router.navigate(['/products']);
        }
      },
      error => {
        console.error('Error fetching product details', error);
        alert('Could not load product details');
        this.router.navigate(['/products']);
      }
    );
  }

  onSubmit() {
    if (this.updateProductForm.valid) {
      const updateProductData = this.updateProductForm.value;
      this.http.put(this.apiUrl, updateProductData).subscribe(
        response => {
          alert('Product updated successfully!');
          this.router.navigate(['/products']);
        },
        error => {
          console.error('Error updating product', error);
          alert('Product update failed');
        }
      );
    } else {
      alert('Please fill in the required fields');
    }
  }
}
