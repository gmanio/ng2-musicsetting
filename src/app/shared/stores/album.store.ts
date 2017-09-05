import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers/index';
import { IAlbum } from '../../models/album.interface';
import * as albumAction from '../../actions/album.action';


@Injectable()
export class AlbumStores {
  constructor(private store: Store<AppState>) {
  }

  selectNewestAlbumList(): Observable<IAlbum[]> {
    return this.store.select(reducerMap => reducerMap.album.newestList);
  }

  dispatchNewestAlbum(albumList: IAlbum[]) {
    this.store.dispatch(new albumAction.GetNewestAlbum(albumList));
  }
}
