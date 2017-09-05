import { Injectable } from '@angular/core';
import { EVT_CMD } from '../../types/broadcast-key';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
  key: EVT_CMD;
  data: any;
}

@Injectable()
export class BroadcastEventService {
  private eventBus$: Subject<BroadcastEvent>;

  constructor() {
    this.eventBus$ = new Subject<BroadcastEvent>();
  }

  broadcast(key: EVT_CMD, data: any) {
    this.eventBus$.next({ key, data });
  }

  on<BroadcastEvent>(key: EVT_CMD): Observable<BroadcastEvent> {
    return this.eventBus$.asObservable()
      .filter(event => event.key === key)
      .map(event => event.data);
  }

}
