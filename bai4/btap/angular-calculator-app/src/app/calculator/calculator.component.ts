import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit {
total:any='';
number1:any;
number2:any;
cacu:string='';
  constructor() { }

  ngOnInit(): void {
  }
  clickNumber(element:any){
    this.total+=element
  }

  plain(b: string):any{
    this.number2=parseInt(b);
    console.log(typeof this.number2);

    switch (this.cacu) {
      case "+":
      this.total = ( this.number1 + this.number2)
      return this.total
        break;
      case "-":
      this.total = ( this.number1 - this.number2)
      return this.total
        break;
      case "*":
        if(this.number2==0||this.number1==0){
          this.total= 0
          return this.total
        }
      this.total = ( this.number1 * this.number2)
      return this.total
        break;
      case "/":
        if(this.number2==0){
          this.total= 'erorrs!!'
          return this.total
        }
      this.total = ( this.number1 / this.number2)
      return this.total
        break;

      default:
        break;
    }
  }


  sum(a:string):void {
    this.number1=parseInt(a);
    this.cacu='+';
    this.total='';
  }
  brand(a:string):void {
    this.number1=parseInt(a);
    this.cacu='-';
    this.total='';
  }
  multi(a:string):void {
    this.number1=parseInt(a);
    this.cacu='*';
    this.total='';
  }
  divide(a:string):void {
    this.number1=parseInt(a);
    this.cacu='/';
    this.total='';
  }
  reset():void{
this.total='';
this.cacu='';
this.number1='';
this.number2='';
  }
  deleteNumber(number1:string):any{

    number1 = number1.slice(0,-1)
this.total= number1
  }


}
