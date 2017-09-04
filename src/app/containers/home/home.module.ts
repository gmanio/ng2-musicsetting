import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.routes';
import { SharedModule } from '../../shared/shared.module';
import { PageNotFoundComponent } from '../../components/error/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRouterModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class HomeModule {
}
