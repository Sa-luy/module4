import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  cartsumary={
  numberItems:5,
  sumary : 26.6,
  tax: 20,
  total:80
  }
  products: Product[]=[
    {
      id:1,
      name:'PRODUCT ITEM NUMBER 2',
      thumbail:'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-116.jpg',
      price:9.9,
      descriptsion:' Description for product item number 2',
      quantity:10,
    },
    {
      id:2,
      name:'PRODUCT ITEM NUMBER 1',
      thumbail:'https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-tgdd42.jpg',
      price:9.9,
      descriptsion:' Description for product item number 1',
      quantity:10,
    },
    {
      id:3,
      name:'PRODUCT ITEM NUMBER 3',
      thumbail:'https://photo-cms-kienthuc.zadn.vn/zoomh/800/uploaded/nguyenanhson/2019_08_28/4/len-bao-trung-gai-xinh-vong-1-khung-tiet-lo-ve-qua-khu.jpg',
      price:9.9,
      descriptsion:' Description for product item number 1',
      quantity:10,
    },
    {
      id:4,
      name:'PRODUCT ITEM NUMBER 3',
      thumbail:'https://ttol.vietnamnetjsc.vn/images/2021/08/26/09/53/Ngoc-Mai-1.jpg',
      price:11.9,
      descriptsion:' Description for product item number 1',
      quantity:10,
    }
  ];


}
