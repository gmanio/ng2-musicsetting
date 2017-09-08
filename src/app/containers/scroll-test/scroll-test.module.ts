import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTestComponent } from './scroll-test.component';
import { ScrollTestRouterModule } from './scroll-test.routes';
import { SharedModule } from '../../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffect } from '../../redux/effects/album.effect';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScrollTestRouterModule,
    EffectsModule.forFeature([
      AlbumEffect
    ])
  ],
  declarations: [
    ScrollTestComponent
  ]
})
export class ScrollTestModule {
}
