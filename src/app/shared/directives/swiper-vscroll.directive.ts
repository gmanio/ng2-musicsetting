import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import * as Swiper from 'Swiper';

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
    this.swiper = new Swiper(this.el.nativeElement, {
      scrollbar: '.swiper-scrollbar',
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      // autoResize: true,
      mousewheelControl: true,
      onTouchMove: this.touchMove.bind(this),
      onTouchStart: this.touchStart.bind(this),
      onTouchEnd: this.touchEnd.bind(this),
      onTransitionStart: this.transitionStart.bind(this),
      onTransitionEnd: this.transitionEnd.bind(this)
    });
  }

  public update() {
    this.swiper.updateAutoHeight();
    this.swiper.update();
    this.swiper.scrollbar.set();
    this.swiper.scrollbar.setTranslate();
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
