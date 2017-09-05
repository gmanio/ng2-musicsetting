import { TestBed, inject } from '@angular/core/testing';

import { NativeBridgeService } from './native-bridge.service';
import { LoggerService } from '../commons/logger.service';
import { BroadcastEventService } from './broadcast-event.service';

describe('NativeBridgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NativeBridgeService,
        LoggerService,
        BroadcastEventService
      ]
    });
  });

  it('should be created', inject([NativeBridgeService], (service: NativeBridgeService) => {
    expect(service).toBeTruthy();
  }));
});
