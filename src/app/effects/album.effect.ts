import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as albumActions from '../actions/album.action';
import { IAlbum } from '../shared/interfaces/album.interface';

import 'rxjs/add/operator/map';

@Injectable()
export class AlbumEffect {
  @Effect() getNewestAlbum$ = this.actions$
    .ofType(albumActions.ActionTypes.GET_NEWEST_ALBUM)
    .map(toPayload)
    .map((res: IAlbum[]) => new albumActions.GetNewestAlbumComplete(res));

  constructor(private actions$: Actions) {
  }
}
