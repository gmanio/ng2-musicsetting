import { Component, OnInit } from '@angular/core';
import { AlbumModel } from '../../models/album.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  album: AlbumModel;

  constructor() {
  }

  ngOnInit() {
    this.album = new AlbumModel({});
    console.log(this.album);
    setTimeout(() => {
      this.album.id = 1;
    }, 3000);
  }

}
