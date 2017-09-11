import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumStore } from './stores/album.store';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([])
  ],
  declarations: [],
  providers: [
    AlbumStore
  ]
})
export class ReduxModule { }
