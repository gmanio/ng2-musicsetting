import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { SwiperVscrollDirective } from '../../shared/directives/swiper-vscroll.directive';
import { Observable } from 'rxjs/Observable';
import { IAlbum } from '../../models/album.interface';
import { AlbumStore } from '../../redux/stores/album.store';
import { LoggerService } from '../../shared/services/commons/logger.service';
import { timer } from 'rxjs/observable/timer';
import { AlbumModel } from '../../models/album.model';

@Component({
  selector: 'tx-scroll-test',
  templateUrl: './scroll-test.component.html',
  styleUrls: ['./scroll-test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollTestComponent implements OnInit {
  @ViewChild(SwiperVscrollDirective) swiper;
  public newestList$: Observable<IAlbum[]>;

  constructor(private albumStore: AlbumStore,
              private logger: LoggerService) {
    this.newestList$ = this.albumStore.selectNewestAlbumList();
  }


  ngOnInit() {
    timer(2000).subscribe(res => {
      this.addContent();
    });
  }

  public onResize() {
    this.swiper.update();
  }

  private addContent() {
    const test1: IAlbum = new AlbumModel({
      id: 1,
      title: 'album1'
    });
    const test2: IAlbum = new AlbumModel({
      id: 2,
      title: 'album2'
    });
    const test3: IAlbum = new AlbumModel({
      id: 1,
      title: 'album1'
    });
    const test4: IAlbum = new AlbumModel({
      id: 2,
      title: 'album2'
    });
    const test5: IAlbum = new AlbumModel({
      id: 1,
      title: 'album1'
    });
    const test6: IAlbum = new AlbumModel({
      id: 2,
      title: 'album2'
    });
    this.albumStore.dispatchNewestAlbum([test1, test2, test3, test4, test5, test6]);
  }
}
