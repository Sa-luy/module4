import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  BookAddForm!: FormGroup;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _bookService: BookService,
    private _Router:Router
  ) { }

  ngOnInit(): void {
    this.BookAddForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      price: new FormControl('',[
        Validators.required
      ]),
    });
  }

  AddBook() {

    let formData = this.BookAddForm.value;
    let product: Book = {
      name: formData.name,
      author: formData.author
    }
    this._bookService.store(product).subscribe(() => {

      this.BookAddForm.reset();

      this._Router.navigate(['/book']);
    }, e => {
      console.log(e);
    });
  }

}
