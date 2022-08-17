import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
color:any='red'
  constructor() { }

  ngOnInit(): void {
  }
  chaneColor(mcolor:any):void{
    // alert(123)
    console.log(mcolor);

    this.color=mcolor;
  }

}
