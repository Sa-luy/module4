import { Component, OnInit } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { IWord } from '../iword';

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  mean:any;
  dictionaies:IWord[] = [];

  constructor(
    private _dictionary:DictionaryService,
  ) { }

  ngOnInit(): void {
    this.mean= this._dictionary.mean
    this.dictionaies= this._dictionary.dictionaries
  }
  dictionary(value:any){
   this.mean = this._dictionary.translate(value);
  }

}
