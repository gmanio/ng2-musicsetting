import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test/test.component';
import { AlbumStores } from './stores/album.store';

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
  providers: [
    AlbumStores
  ]
})
export class SharedModule {
}
