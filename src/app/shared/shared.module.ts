import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test/test.component';
import { AlbumStores } from './stores/album.store';
import { LoggerService } from './services/commons/logger.service';

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
    LoggerService,
    AlbumStores
  ]
})
export class SharedModule {
}
