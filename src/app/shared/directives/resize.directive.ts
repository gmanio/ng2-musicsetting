import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import * as elementResizeDetectorMaker from 'element-resize-detector';

@Directive({
  selector: '[txResize]'
})
export class ResizeDirective implements OnInit, OnDestroy {
  @Output() resize = new EventEmitter();
  private resizeDetector: any;


  constructor(private el: ElementRef) {
    this.resizeDetector = elementResizeDetectorMaker({
      strategy: 'scroll'
    });
  }

  ngOnInit() {
    this.resizeDetector.listenTo(this.el.nativeElement, this.sendResizeEvent.bind(this));
  }

  ngOnDestroy() {
    this.resizeDetector.uninstall(this.el.nativeElement);
  }

  private sendResizeEvent() {
    this.resize.emit();
  }

}
