import { IArtist } from '../interfaces/artist.interface';
import { IAlbumImage } from '../interfaces/album-image.interface';

export class Album {
  id: number;
  categoryType: string;
  title: string;
  genreStyle: string;
  albumType: string;
  releaseYmd: number;
  artistList: IArtist[];
  imgList: IAlbumImage[];
}
