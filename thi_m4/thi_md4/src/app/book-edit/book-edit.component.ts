import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
book:any
id:any
BookEditForm!:FormGroup


  constructor(private _ActivatedRoute: ActivatedRoute,
    private _bookService: BookService,
    private _Router:Router) { }


  ngOnInit(): void {
    this.BookEditForm =
    this.id= this._ActivatedRoute.snapshot.params['id']
    this._bookService.getById(this.id).subscribe(res=>{

      this.BookEditForm=new FormGroup({
        name:new FormControl(res.name,[
          Validators.required

        ]),
        author:new FormControl(res.author,[
          Validators.required
        ])
      })

    });
    this.BookEditForm=new FormGroup({
      name:new FormControl(['']),
      author:new FormControl([''])
    })

  }

  EditBook(){
    let bookData:Book = {
      name: this.BookEditForm.value.name,
      author: this.BookEditForm.value.author
    }
    this._bookService.update(this.id, bookData).subscribe(() => {
      this._Router.navigate(['/book']);
    }, e => {
      console.log(e);
    });


  }

}
