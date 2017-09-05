import { Action } from '@ngrx/store';
import { IAlbum } from '../shared/interfaces/album.interface';

export const ActionTypes = {
  GET_NEWEST_ALBUM: 'get newest album',
  GET_NEWEST_ALBUM_COMPLETE: 'get newest album complete'
};

export class GetNewestAlbum implements Action {
  type = ActionTypes.GET_NEWEST_ALBUM;

  constructor(public payload: IAlbum[]) {
  }
}

export class GetNewestAlbumComplete implements Action {
  type = ActionTypes.GET_NEWEST_ALBUM_COMPLETE;

  constructor(public payload: IAlbum[]) {
  }
}


export type Actions =
  GetNewestAlbum |
  GetNewestAlbumComplete;
