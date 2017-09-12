import { Injectable } from '@angular/core';
import { BROADCAST } from '../../types/event-key.type';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

interface BroadcastEvent {
  key: BROADCAST;
  data: any;
}

@Injectable()
export class BroadcastEventService {
  private eventBus$: Subject<BroadcastEvent>;

  constructor() {
    this.eventBus$ = new Subject<BroadcastEvent>();
  }

  broadcast(key: BROADCAST, data: any) {
    this.eventBus$.next({ key, data });
  }

  on<BroadcastEvent>(key: BROADCAST): Observable<BroadcastEvent> {
    return this.eventBus$.asObservable()
      .filter(event => event.key === key)
      .map(event => event.data);
  }

}
