import { Action } from '@ngrx/store';
import { IAlbum } from '../models/album.interface';

// export const ActionTypes = {
//   GET_NEWEST_ALBUM: 'get newest album',
//   GET_NEWEST_ALBUM_COMPLETE: 'get newest album complete'
// };

export const GET_NEWEST_ALBUM = 'get newest album';
export const GET_NEWEST_ALBUM_COMPLETE = 'get newest album complete';

export class GetNewestAlbum implements Action {
  readonly type = GET_NEWEST_ALBUM;

  constructor(public payload: IAlbum[]) {
  }
}

export class GetNewestAlbumComplete implements Action {
  readonly type = GET_NEWEST_ALBUM_COMPLETE;

  constructor(public payload: IAlbum[]) {
  }
}

export type Actions =
  GetNewestAlbum |
  GetNewestAlbumComplete;
