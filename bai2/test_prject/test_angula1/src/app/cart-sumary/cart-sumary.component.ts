import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-sumary',
  templateUrl: './cart-sumary.component.html',
})
export class CartSumaryComponent implements OnInit {
  @Input() products:any;
  @Input() sumary:any;

  constructor() { }

  ngOnInit(): void {
  }


}
