// src/app/domain/customer.ts
export interface Customer {
    id?: number;
    name?: string;
    country?: string;
    representative?: Representative;
    date?: Date;
    status?: string;
  }
  
  export interface Representative {
    name?: string;
    image?: string;
  }
  