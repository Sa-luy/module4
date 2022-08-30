import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-show',
  templateUrl: './book-show.component.html',
  styleUrls: ['./book-show.component.css']
})
export class BookShowComponent implements OnInit {
book:any={
  name:'',
  author:''
}
id:any
  constructor(   private _ActivatedRoute: ActivatedRoute,
                  private _bookService: BookService,
                  private _Router:Router
    ) { }

  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.params['id']
    this._bookService.getById(this.id).subscribe(res=>{
      this.book=res
    });


}
}
