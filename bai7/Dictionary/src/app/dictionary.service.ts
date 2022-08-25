import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { IWord } from './iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  mean:string='';
dictionaries:IWord[]=[
  {
    word:'go',
  mean:'đi'
  },
  {
    word:'hello',
  mean:'xin chào'
  },
  {
    word:'husband',
  mean:'chồng'
  },
  {
    word:'funny',
  mean:'vui tính'
  },
  {
    word:'smart',
  mean:'thông minh'
  },
  {
    word:'daughter',
  mean:'con gái'
  },
  {
    word:'son',
  mean:'con trai'
  },
  {
    word:'darling',
  mean:'người thương nhớ'
  },
];

  constructor() { }
  translate (text:any):any{
    for(let i=0;i<this.dictionaries.length;i++){
      if(this.dictionaries[i].word == text){

        return this.dictionaries[i].mean
      }
    }
    return 'not thing mean';
  }
}
