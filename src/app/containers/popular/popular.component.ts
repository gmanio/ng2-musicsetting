import { Component, OnInit } from '@angular/core';
import { Album } from '../../shared/models/album.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {
  album: Album;

  constructor() {
  }

  ngOnInit() {
    this.album = new Album();
    console.log(this.album);
    setTimeout(() => {
      this.album.id = 1;
    }, 3000);
  }

}
