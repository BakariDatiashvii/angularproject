export interface RegisterEmployeeDTO {
  firstName: string;       // Changed from FirsName to firstName
  lastName: string;
  userName: string;
  password: string;
  email: string;
  phoneNumber: string;
  // operatorID?: number;     // Optional field
  companyid?: number;      // Optional field
  sawyobiID?: number;      // Optional field
  role: number;            // Assuming role is a string, change as needed (e.g., 'admin', 'manager', 'operator')
}