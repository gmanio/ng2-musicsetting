import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularComponent } from './popular.component';
import { PopularRouterModule } from './popular.routes';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PopularRouterModule
  ],
  declarations: [
    PopularComponent
  ]
})
export class PopularModule {
}
