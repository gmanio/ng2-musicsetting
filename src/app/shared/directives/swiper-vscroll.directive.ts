import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

import { default as Swiper } from 'swiper/dist/js/swiper.min';

@Directive({
  selector: '[txSwiperVscroll]'
})

export class SwiperVscrollDirective implements AfterViewInit {
  private swiper;
  private direction = 0;

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
      // onTouchMove: this.touchMove.bind(this),
      // onTouchStart: this.touchStart.bind(this),
      // onTouchEnd: this.touchEnd.bind(this),
      // onTransitionStart: this.transitionStart.bind(this),
      // onTransitionEnd: this.transitionEnd.bind(this)
    });

    this.swiper.on('touchMove', this.touchMove.bind(this));
    this.swiper.on('touchStart', this.touchStart.bind(this));
    this.swiper.on('touchEnd', this.touchStart.bind(this));
    this.swiper.on('transitionStart', this.transitionStart.bind(this));
    this.swiper.on('transitionEnd', this.transitionEnd.bind(this));
  }

  public update() {
    this.swiper.update();
  }

  public goTo(duration, value) {
    this.swiper.setWrapperTransition(duration);
    this.swiper.setWrapperTranslate(value);
  }

  private touchMove(event) {
    // console.log('touchMove', this.swiper, event, event.movementY);
    // if ( swiper.maxTranslate() === 0 ) {
    //   this.direction = swiper.getTranslate(swiper.wrapper[0], 'y') > 0 ? 1 : swiper.getTranslate(swiper.wrapper[0], 'y') < 0 ? -1 : 0;
    //   console.log(this.direction);
    // }
    // console.log('touchMove', swiper, e);
  }

  private touchStart(event) {
    // console.log('touchStart');

  }

  private touchEnd(event) {
    // console.log('touchend');

  }

  private transitionStart(event) {
    // console.log('transitionStart', event, this.swiper.translate, this.swiper.progress);
    if ( this.swiper.translate > 0 && this.swiper.progress === 0 ) {
      this.pullToRefresh.emit(true);
    }

  }

  private transitionEnd(event) {
    // console.log('transitionEnd');

  }
}
