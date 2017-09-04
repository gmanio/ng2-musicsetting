import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test/test.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ],
  providers: []
})
export class SharedModule {
}
