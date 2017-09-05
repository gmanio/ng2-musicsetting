import { IArtist } from '../interfaces/artist.interface';
import { IAlbumImage } from '../interfaces/album-image.interface';

export class AlbumModel {
  id: number;
  categoryType: string;
  title: string;
  genreStyle: string;
  albumType: string;
  releaseYmd: number;
  artistList: IArtist[];
  imgList: IAlbumImage[];

  constructor(object) {
    this.id = object.id || 0;
    this.categoryType = object.categoryType || '';
    this.title = object.title || '';
    this.genreStyle = object.genreStyle || '';
    this.albumType = object.albumType || '';
    this.releaseYmd = object.releaseYmd || '';
    this.artistList = object.artistList || [];
    this.imgList = object.imgList || [];
  }
}
