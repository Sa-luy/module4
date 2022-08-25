import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  id:any

  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _ProductService:ProductService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.id = id;
     let check:boolean = this._ProductService.destroy(this.id)
     if(check){
       this._Router.navigate(['/list-product']);

     }else{
      //tra ve trang 404
     }

    })
  }
}
