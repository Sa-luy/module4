import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books:Book[] = [];
  constructor(
    private _bookService:BookService
  ) { }

  ngOnInit(): void {
    this.getAll();


  }
  getAll(){
    this._bookService.getAll().subscribe(books => {
      this.books = books;
     });
  }
  removeBook(id:any){
    console.log(id);

    this._bookService.destroy(id).subscribe(book => {
      this.getAll();
    })

  }
}
