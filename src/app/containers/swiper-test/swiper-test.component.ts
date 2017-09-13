import { Component, OnInit } from '@angular/core';
import { default as Swiper } from 'swiper/dist/js/swiper.min';

@Component({
  selector: 'tx-swiper-test',
  templateUrl: './swiper-test.component.html',
  styleUrls: ['./swiper-test.component.scss']
})
export class SwiperTestComponent implements OnInit {
  private swiper: any;
  constructor() { }

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container');
  }

}
