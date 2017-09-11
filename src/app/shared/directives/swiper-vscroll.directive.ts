import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

import { default as Swiper } from 'swiper/dist/js/swiper.min';

@Directive({
  selector: '[txSwiperVscroll]'
})

export class SwiperVscrollDirective implements AfterViewInit {
  private swiper;
  @Output() scrollDown = new EventEmitter();
  @Output() scrollUp = new EventEmitter();
  @Output() pullToRefresh = new EventEmitter();
  @Output() infiniteDown = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const elHost = this.el.nativeElement;
    const elScrollBar = elHost.querySelector('.swiper-scrollbar');
    this.swiper = new Swiper(elHost, {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: elScrollBar,
        hide: false,
        draggable: false,
        snapOnRelease: false
      },
      mousewheelControl: true,
      onTouchMove: this.touchMove.bind(this),
      onTouchStart: this.touchStart.bind(this),
      onTouchEnd: this.touchEnd.bind(this),
      onTransitionStart: this.transitionStart.bind(this),
      onTransitionEnd: this.transitionEnd.bind(this)
    });
  }

  public update() {
    this.swiper.update();
  }

  public goTo(duration, value) {
    this.swiper.setWrapperTransition(duration);
    this.swiper.setWrapperTranslate(value);
  }

  private touchMove(swiper, e) {

  }

  private touchStart(swiper, e) {

  }

  private touchEnd(swiper, e) {

  }

  private transitionStart(swiper, e) {

  }

  private transitionEnd(swiper, e) {

  }
}
