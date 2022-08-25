import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path:'add-product',component:ProductAddComponent},
  { path:'list-product',component:ProductComponent},
  { path:'edit-product/:id',component:ProductEditComponent},
  { path:'delete-product/:id',component:ProductDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
