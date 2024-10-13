import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table'; 
import { environment } from '../environment';
import { InputTextModule } from 'primeng/inputtext';

import { Table } from 'primeng/table';

import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';


import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';


@Component({
  selector: 'app-get-manager-storeproduct',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TableModule,InputTextModule,TagModule,IconFieldModule,InputIconModule,MultiSelectModule,DropdownModule], 
  templateUrl: './get-manager-storeproduct.component.html',
  styleUrls: ['./get-manager-storeproduct.component.css']
})
export class GetManagerStoreproductComponent implements OnInit {
  storeProductData: any;
  storeId: number | undefined; 
  loading: boolean = true; // Add a loading state

  constructor(private http: HttpClient, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.storeId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchStoreProductData();
  }

  fetchStoreProductData() {
    this.http.get<any>(`${environment.getmanagerstoreproductUrl}/${this.storeId}`).subscribe(
      (data) => {
        this.storeProductData = data;
        console.log('Store Product Data:', this.storeProductData);
        this.loading = false; // Set loading to false after data is fetched
        this.cd.detectChanges();
      },
      (error) => {
        console.error('Error fetching store product data', error);
        this.loading = false; // Set loading to false on error as well
      }
    );
  }
}
