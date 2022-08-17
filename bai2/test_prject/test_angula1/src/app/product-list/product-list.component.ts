import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products:any;

  constructor() { }

  ngOnInit(): void {
  }
  updateQuantity(element:any,product_id:any){
    const index= this.products.findIndex((product:any) => product.id=== product_id)
    this.products[index].quantity = element.value
    setTimeout(() => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your update product',
        showConfirmButton: false,
        timer: 1500
      })
    }, 3000);


  }
  removeProduct(param:number){
    const index= this.products.findIndex((product:any) => product.id=== param)
  this.products.splice(index,1)
  setTimeout(() => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your delete product',
      showConfirmButton: false,
      timer: 1500
    })
  }, 1000);

  }



}
