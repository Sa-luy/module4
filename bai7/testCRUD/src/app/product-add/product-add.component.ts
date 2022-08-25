import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm!: FormGroup;
  id:any;
  product!:Product;
  constructor(
    private _ProductService:ProductService,
    private _Router:Router
  ){}
  get form(){
    return this.productAddForm.controls
  }
  productAddForm=new FormGroup({
    name:new FormControl('', [
      Validators.required,

    ]),

    description:new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  })

  ngOnInit(): void {
  }
  addProduct(){
        let newProduct:Product={
          name: this.productAddForm.value.name,
          description: this.productAddForm.value.description
    };
    this._ProductService.products.push(newProduct)
    this._Router.navigate(['/list-product']);
  }

}
