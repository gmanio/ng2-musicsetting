import { Injectable } from '@angular/core';

enum LOG {
  ERROR,
  WARN,
  INFO,
  DEBUG
}

@Injectable()
export class LoggerService {
  public error: Function;
  public warn: Function;
  public info: Function;
  public log: Function;
  private level: LOG;

  constructor() {
    this.level = LOG.DEBUG;

    if ( !(typeof console === 'undefined') ) {
      this.setLogFunc();
    }
  }

  private setLogFunc() {
    switch ( this.level ) {
      case LOG.DEBUG:
        this.log = console.log.bind(console);
        this.info = console.info.bind(console);
        this.warn = console.warn.bind(console);
        this.error = console.error.bind(console);
        break;
      case LOG.INFO:
        this.log = (msg) => {};
        this.info = console.info.bind(console);
        this.warn = console.warn.bind(console);
        this.error = console.error.bind(console);
        break;
      case LOG.WARN:
        this.log = (msg) => {};
        this.info = (msg) => {};
        this.warn = console.warn.bind(console);
        this.error = console.error.bind(console);
        break;
      case LOG.ERROR:
        this.log = (msg) => {};
        this.info = (msg) => {};
        this.warn = (msg) => {};
        this.error = console.error.bind(console);
        break;
      default:
        console.error('Not expected value');
    }
  }
}
