import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { FromLoginComponent } from './from-login/from-login.component';
import { Routes } from '@angular/router';
const appRouter : Routes = [
  {
      path : 'index',
      component: FromLoginComponent
  },
  {
      path : 'about',
      component: TodoComponent
  },
  {
      // khi một router nào được gọi mà không có trong phần appRouter thì NotFoundComponent được gọi ra
      path : '**',
      component: FromLoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    FromLoginComponent,
    TodoComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
