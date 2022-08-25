import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { from } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productEditForm!: FormGroup;
  id:any;
  product!:Product;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router:Router
  ){}
  get form(){
    return this.productEditForm.controls
  }


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;


    this.product = this._ProductService.show(this.id)
    this.productEditForm=new FormGroup({
      name:new FormControl(this.product.name, [
        Validators.required,

      ]),

      description:new FormControl(this.product.description, [
        Validators.required,
        Validators.minLength(8),
      ]),
    })
  })
}

  UpdateProduct(){
      let updateProduct:Product={
        name: this.productEditForm.value.name,
        description: this.productEditForm.value.description
      }
      for(let idx=0 ; idx<this._ProductService.products.length;idx++){
            if( this.id ==this._ProductService.products[idx].id){
          this._ProductService.products[idx] = updateProduct
          }
      }
      this._Router.navigate(['/list-product']);


  }

}
