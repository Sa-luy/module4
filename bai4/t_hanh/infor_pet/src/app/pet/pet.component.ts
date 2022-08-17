import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pet:Pet = {
    name: 'hotgirl',
    image:'https://img-cdn.2game.vn/2022/05/17/ChienGioi4d-gaixinh-3.jpg'
  }
  updatePet(name: string){
    this.pet.name= name;
  }
  updateImage(image:string){
    this.pet.image= image
  }
}
