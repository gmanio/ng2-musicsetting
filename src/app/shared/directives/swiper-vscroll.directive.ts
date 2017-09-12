import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { SCROLL_DIRECTION } from '../types/event-key.type';
import { default as Swiper } from 'swiper/dist/js/swiper.min';
import FormatHelper from '../helpers/format.helper';

@Directive({
  selector: '[txSwiperVscroll]'
})

export class SwiperVscrollDirective implements AfterViewInit {
  private swiper: any;
  private direction: SCROLL_DIRECTION = SCROLL_DIRECTION.DEFAULT;
  private prevTranslate: number;
  private isTransition: boolean;

  @Output() changeDirection = new EventEmitter();
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
    if ( FormatHelper.isEmpty(this.prevTranslate) ) {
      this.prevTranslate = this.swiper.translate;
      return;
    }
    const movement = this.swiper.translate - this.prevTranslate;
    if ( movement !== 0 && !this.isTransition ) {
      const currentDirection: SCROLL_DIRECTION = movement < 0 ? SCROLL_DIRECTION.UP_TO_DOWN : SCROLL_DIRECTION.DOWN_TO_UP;
      if ( this.direction === 0 ) {
        this.changeDirection.emit(currentDirection);
      } else if ( this.direction !== currentDirection ) {
        this.changeDirection.emit(currentDirection);
      }
      this.direction = currentDirection;
      this.prevTranslate = this.swiper.translate;
    }
  }

  private touchStart(event) {
    // console.log('touchStart', this.swiper.translate, this.prevTranslate);
    // this.prevTranslate = this.swiper.translate;

  }

  private touchEnd(event) {
    // console.log('touchend');

  }

  private transitionStart(event) {
    this.isTransition = true;
    // console.log('transitionStart', this.swiper.translate, this.swiper.progress);
    if ( this.swiper.translate > 0 && this.swiper.progress === 0 ) {
      this.pullToRefresh.emit(true);
    }

  }

  private transitionEnd(event) {
    this.isTransition = false;
    // console.log('transitionEnd');

  }
}
