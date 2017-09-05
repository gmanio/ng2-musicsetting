import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test/test.component';
import { AlbumStores } from './stores/album.store';
import { LoggerService } from './services/commons/logger.service';
import { ApiService } from './services/interfaces/api.service';
import { BroadcastEventService } from './services/interfaces/broadcast-event.service';
import { NativeBridgeService } from './services/interfaces/native-bridge.service';

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
    ApiService,
    BroadcastEventService,
    NativeBridgeService,
    ApiService,
    AlbumStores
  ]
})
export class SharedModule {
}
