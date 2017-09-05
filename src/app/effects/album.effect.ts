import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { IAlbum } from '../models/album.interface';
import * as albumActions from '../actions/album.action';
import { GetNewestAlbum } from '../actions/album.action';

import 'rxjs/add/operator/map';

@Injectable()
export class AlbumEffect {
  @Effect() getNewestAlbum$ = this.actions$
    .ofType(albumActions.GET_NEWEST_ALBUM)
    .map((action: GetNewestAlbum) => action.payload)
    .map((res: IAlbum[]) => new albumActions.GetNewestAlbumComplete(res));

  constructor(private actions$: Actions) {
  }
}
