import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../components/test/test.component';
import { LoggerService } from './services/commons/logger.service';
import { ApiService } from './services/interfaces/api.service';
import { BroadcastEventService } from './services/interfaces/broadcast-event.service';
import { NativeBridgeService } from './services/interfaces/native-bridge.service';
import { ToastComponent } from '../components/toast/toast.component';
import { ReduxModule } from '../redux/redux.module';
import { SwiperVscrollDirective } from './directives/swiper-vscroll.directive';
import { ResizeDirective } from './directives/resize.directive';

@NgModule({
  imports: [
    CommonModule,
    ReduxModule
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
