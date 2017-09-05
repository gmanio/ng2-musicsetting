import { Component, Input, OnInit } from '@angular/core';
import { IAlbum } from '../../models/album.interface';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() newestList: IAlbum[];

  constructor() {
  }

  ngOnInit() {
  }

}
