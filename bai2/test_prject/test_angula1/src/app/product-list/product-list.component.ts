import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  @Input() products:any;
  @Output() removeEvent = new EventEmitter();
  @Output() updateQuantityEvent = new EventEmitter();
  removeProduct(value: string) {
    this.removeEvent.emit(value);
    }
   updateQuantity(value:any){

      this.updateQuantityEvent.emit(value);
    }

  constructor() { }

  ngOnInit(): void {
  }





}
