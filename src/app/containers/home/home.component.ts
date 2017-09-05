import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IAlbum } from '../../shared/interfaces/album.interface';
import { AlbumStores } from '../../shared/stores/album.store';
import { AlbumModel } from '../../shared/models/album.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public newestList$: Observable<IAlbum[]>;

  constructor(private albumStore: AlbumStores) {
    this.newestList$ = this.albumStore.selectNewestAlbumList();
  }

  ngOnInit() {
    this.reduxTest();
  }

  private reduxTest() {
    const test1: IAlbum = new AlbumModel({
      id: 1,
      title: 'album1'
    });
    const test2: IAlbum = new AlbumModel({
      id: 2,
      title: 'album2'
    });
    this.albumStore.dispatchNewestAlbum([test1, test2]);
  }
}
