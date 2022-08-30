import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookShowComponent } from './book-show/book-show.component';

const routes: Routes = [
  { path:'book', component:BookListComponent},
  { path:'book/add', component:BookAddComponent},
  { path:'book/show/:id', component:BookShowComponent},
  { path:'book/edit/:id', component:BookEditComponent},
  { path:'book/delete/:id', component:BookDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
