import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { RegisterComponent } from './register/register.component';
import { UserManagmentRegisterComponent } from './user-managment-register/user-managment-register.component';
import { RegisterMenegerandoperatorComponent } from './register-menegerandoperator/register-menegerandoperator.component';
import { UpdageRegisterManagerandoperatorComponent } from './updage-register-managerandoperator/updage-register-managerandoperator.component';
import { AddStoreManagerComponent } from './add-store-manager/add-store-manager.component';
import { GetManagerStoreproductComponent } from './get-manager-storeproduct/get-manager-storeproduct.component';
import { GetOperatorStoreproductComponent } from './get-operator-storeproduct/get-operator-storeproduct.component';
import { UpdateProductshemosuliComponent } from './update-productshemosuli/update-productshemosuli.component';
import { AddOperatorProductComponent } from './add-operator-product/add-operator-product.component';
import { UpdateProductgayiduliComponent } from './update-productgayiduli/update-productgayiduli.component';


export const routes: Routes = [
    {
        path:"", component: LoginComponent
    },
    {
        path:"usersmanagement", component:UsersManagementComponent
    },
    {
        path:"register", component:RegisterComponent
    },

    {
        path: "registermanagerandoperator", component: RegisterMenegerandoperatorComponent
    },

    {
        path:"registerupdatemanagerandoperator/:id", component: UpdageRegisterManagerandoperatorComponent
    },
    {
        path:"registerupdatemanagerstore", component: AddStoreManagerComponent
    },
    {
        path:"navigateToGetmanagerstorepr/:id", component: GetManagerStoreproductComponent
    },
    { 
        path: 'getoperatorstore/:id/:storeOperatorId', component: GetOperatorStoreproductComponent 
    },
    {
        path: "shemosuliproductstore/:id", component: UpdateProductshemosuliComponent
    },
    {
        path: "addproductoperator/:id/:storeOperatorId", component: AddOperatorProductComponent
    },
    {
        path: "sellproductstore/:id", component: UpdateProductgayiduliComponent
    }
    
   

    
    
];
