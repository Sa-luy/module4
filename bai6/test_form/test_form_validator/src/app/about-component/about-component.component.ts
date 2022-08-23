import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-about-component',
  templateUrl: './about-component.component.html',
  styleUrls: ['./about-component.component.css']
})
export class AboutComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToHome(){
    // this.router.navigate(['home'])
    this.router.navigateByUrl('home')
  }

}
