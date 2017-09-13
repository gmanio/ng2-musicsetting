import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../../models/album.interface';

@Component({
  selector: 'tx-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {
  @Input() newestList: IAlbum[];

  constructor() {
  }

  ngOnInit() {
  }

}
