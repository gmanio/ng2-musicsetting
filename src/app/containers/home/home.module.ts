import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRouterModule } from './home.routes';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from '../../components/error/page-not-found.component';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffect } from '../../effects/album.effect';

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
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class HomeModule {
}
