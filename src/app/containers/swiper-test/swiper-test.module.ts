import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SwiperTestComponent } from './swiper-test.component';
import { SwiperTestRouterModule } from './swiper-test.routes';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SwiperTestRouterModule
  ],
  declarations: [
    SwiperTestComponent
  ]
})
export class SwiperTestModule { }
