import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
id:any
  constructor( private _ActivatedRoute: ActivatedRoute,
    private _bookService: BookService,
    private _Router:Router) { }

  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.params['id']
    this._bookService.destroy(this.id)
    this._Router.navigate(['/book']);


  }

}
