import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
// import { ImageGalleryComponent } from './image-gallery.component';
// import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



@NgModule({
  declarations: [
    ImageCardComponent,
    // ImageGalleryComponent

  ],
  imports: [
    CommonModule,


  ],
  exports: [
    ImageCardComponent
  ]
})

export class ImageGalleryModule { }
