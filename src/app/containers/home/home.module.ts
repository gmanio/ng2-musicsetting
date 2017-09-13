import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { AlbumEffect } from '../../redux/effects/album.effect';

import { HomeRouterModule } from './home.routes';
import { HomeComponent } from './home.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRouterModule,
    EffectsModule.forFeature([
      AlbumEffect
    ])
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
