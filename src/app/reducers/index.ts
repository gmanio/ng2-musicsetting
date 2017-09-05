import { ActionReducerMap } from '@ngrx/store';
import * as fromAlbum from './album.reducer';

export interface AppState {
  album: fromAlbum.State;
}

export const reducers: ActionReducerMap<AppState> = {
  album: fromAlbum.reducer
};
