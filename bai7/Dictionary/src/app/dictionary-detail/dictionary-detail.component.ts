import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DictionaryService } from '../dictionary.service';
import { IWord } from '../iword';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
id:any;
wordText!:IWord
  constructor(
    private _dictionaryService:DictionaryService,
    private _ActivatedRoute:ActivatedRoute
   ) { }

  ngOnInit(): void {
     //lay id tu url xuong
      this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        const id = paramMap.get('id');
        this.id = id;
      this.wordText= this._dictionaryService.dictionaries[this.id]
     })
  }

}
