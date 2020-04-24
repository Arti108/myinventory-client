import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
//import { InvoiceListComponent } from './customer-list/invoice-list.component';

const routes: Routes = [{ path: '', redirectTo: 'product', pathMatch: 'full' },
{ path: 'products', component: ProductListComponent },
{ path: 'add', component: CreateProductComponent },
{ path: 'details/:id', component: ProductDetailsComponent },
{ path: 'update/:id', component: UpdateProductComponent },
{ path: 'login', component: LoginComponent },
{ path: 'logout', component: LogoutComponent },
{ path: 'orders', component: OrderListComponent },
{ path: 'customerss', component: CustomersListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
