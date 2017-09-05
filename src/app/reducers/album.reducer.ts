import * as albumAction from '../actions/album.action';
import { IAlbum } from '../models/album.interface';

export interface State {
  newestList: IAlbum[];
  loading: boolean;
}

const initialState: State = {
  newestList: [],
  loading: false
};

export function reducer(state = initialState, action: albumAction.Actions): State {
  switch ( action.type ) {
    case albumAction.ActionTypes.GET_NEWEST_ALBUM: {
      return Object.assign({}, state, {
        loading: true
      });
    }
    case albumAction.ActionTypes.GET_NEWEST_ALBUM_COMPLETE: {
      const list = action.payload;
      return Object.assign({}, state, {
        newestList: list,
        loading: false
      });
    }
  }
}

