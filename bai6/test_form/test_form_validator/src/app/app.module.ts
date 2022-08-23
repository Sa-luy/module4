import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponentComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    AboutComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
