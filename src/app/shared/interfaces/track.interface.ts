import { IArtist } from './artist.interface';
import { IAlbum } from './album.interface';

export interface ITrack {
  id: number;
  name: string;
  playTime: string;
  adultAuthYn: string;
  subtractQty: number;
  holdbackYn: string;
  displayYn: string;
  artistNames: string;
  createDateTime: Date;
  updateDateTime: Date;
  memberNo: number;
  listenCount: number;
  lastListenDateTime: Date;
  likeYn: boolean;
  agencyId: number;
  artistList: IArtist[];
  album: IAlbum;
}

