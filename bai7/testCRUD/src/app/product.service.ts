import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[]=[
  {
    id:1,
    name: 'Saluy',
    description: 'Vì sao cao tốc Hạ Long - Móng Cái dài 176 km hiện chưa có cây xăng, trạm dừng nghỉ?'
  },
  {
    id:2,
    name: 'Kim Chon',
    description: 'Trục cao tốc dài 176 km của Quảng Ninh, kéo dài từ cầu Bạch Đằng (thị xã Quảng Yên) đến nút giao cầu Bắc Luân 2 (TP Móng Cái) hiện chưa có bất kỳ trạm dừng nghỉ hay trạm xăng nào'
  },
  {
    id:3,
    name: 'duc Tan',
    description: 'Video 3 trận "để đời" của Ten Hag tại MU: Từ tột cùng thất vọng tới đỉnh cao Derby nước Anh'
  },
  {
    id:4,
    name: 'Ngoc Linh',
    description: '3 trận đấu đầu tiên của HLV Ten Hag tại Man United chính là khởi đầu mùa giải Ngoại hạng Anh năm nay. Man United đã bước vào mùa giải mới bằng sự tự tin cao độ sau chuỗi trận giao hữu được đánh giá là thành công trên nhiều phương diện'
  },
  {
    id:5,
    name: 'Nhu Ngoc',
    description: 'Dù vậy, "Quỷ đỏ" đã khởi đầu một cách đầy giông bão và chỉ mới giành lại niềm tin nơi người hâm mộ nhờ chiến thắng bất ngờ ở trận Derby nước Anh.'
  }
]
  constructor() { }
  getAll():Product[]{
    return this.products

  }
  show(id:any){
    let product!: Product;
   for(let i=0;i<this.products.length;i++){
    if(id==this.products[i].id){
      return this.products[i]
    }
   }
   return product;

  }
  save(dataProduct:Product){
    this.products.push(dataProduct)
  }
  destroy(id:any): boolean{
    for(let i=0;i<this.products.length;i++){
      if(id==this.products[i].id){
        this.products.splice(id,1)
        return true;
      }
     }
    return false
  };
}
