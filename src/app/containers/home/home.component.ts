import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IAlbum } from '../../models/album.interface';
import { AlbumStore } from '../../redux/stores/album.store';
import { AlbumModel } from '../../models/album.model';
import { LoggerService } from '../../shared/services/commons/logger.service';

@Component({
  selector: 'tx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit {
  public newestList$: Observable<IAlbum[]>;

  constructor(private albumStore: AlbumStore,
              private logger: LoggerService) {
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
