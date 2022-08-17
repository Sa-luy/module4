export class Product{
  id:number;
  name: string;
  thumbail: string;
  price: number;
  descriptsion: string;
  quantity: number;
  constructor(id:number, name:string , price: number, thumbail:string,descriptsion: string ,quantity: number){
    this.id = id,
    this.name = name,
    this.thumbail = thumbail,
    this.price = price,
    this.descriptsion = descriptsion,
    this.quantity = quantity
  }

}
