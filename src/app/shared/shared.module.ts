import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Services
 */
import { LoggerService } from './services/commons/logger.service';
import { ApiService } from './services/interfaces/api.service';
import { BroadcastEventService } from './services/interfaces/broadcast-event.service';
import { NativeBridgeService } from './services/interfaces/native-bridge.service';

/**
 * Componnets
 */
import { TestComponent } from '../components/test/test.component';
import { ToastComponent } from '../components/toast/toast.component';

/**
 * Directives
 */
import { SwiperVscrollDirective } from './directives/swiper-vscroll.directive';
import { ResizeDirective } from './directives/resize.directive';

@NgModule({
imports: [
    CommonModule
  ],
  declarations: [
    TestComponent,
    ToastComponent,
    SwiperVscrollDirective,
    ResizeDirective
  ],
  exports: [
    TestComponent,
    ToastComponent,
    SwiperVscrollDirective,
    ResizeDirective
  ],
  providers: [
    ApiService,
    LoggerService,
    BroadcastEventService,
    NativeBridgeService
  ]
})

export class SharedModule {
}
