import { IAlbumImage } from './album-image.interface';
import { IArtist } from './artist.interface';

export interface IAlbum {
  id: number;
  categoryType: string;
  title: string;
  genreStyle: string;
  albumType: string;
  releaseYmd: number;
  artistList: IArtist[];
  imgList: IAlbumImage[];
}
