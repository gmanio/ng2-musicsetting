import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumStore } from './stores/album.store';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AlbumStore
  ]
})
export class ReduxModule { }
