import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { Location } from '@angular/common';
import { LoggerService } from '../commons/logger.service';

@Injectable()
export class CustomReuseService implements RouteReuseStrategy {
  private handlers: { [key: string]: DetachedRouteHandle } = {};
  private isHistoryBack: boolean;

  constructor(private location: Location,
              private logger: LoggerService) {
    this.location.subscribe(res => {
      this.isHistoryBack = true;
    });
  }

  calcKey(route: ActivatedRouteSnapshot) {
    let next = route;
    let url = '';
    while ( next ) {
      if ( next.url.length > 0 ) {
        url = next.url.join('/');
      }
      next = next.firstChild;
    }
    return url;
  }

  /**
   * Determines if this route (and its subtree) should be detached to be reused later.
   * @param route
   * @returns {boolean}
   */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // this.logger.log('CustomReuseService:shouldDetach', route);
    return false;
  }

  /**
   * Stores the detached route.
   * @param route
   * @param handle
   */
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // this.logger.log('[CustomReuseService:store]', route, handle, this.calcKey(route));
    this.handlers[this.calcKey(route)] = handle;
  }

  /**
   * Determines if this route (and its subtree) should be reattached.
   * @param route
   * @returns {boolean}
   */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    // this.logger.log('[CustomReuseService:shouldAttach]', route, this.calcKey(route));
    return !!route.routeConfig && !!this.handlers[this.calcKey(route)];
  }

  /**
   * Retrieves the previously stored route.
   * @param route
   * @returns {DetachedRouteHandle}
   */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // this.logger.log('[CustomReuseService:retrieve]', route, this.calcKey(route));
    if ( !route.routeConfig ) {
      return null;
    }
    return this.handlers[this.calcKey(route)];
  }

  /**
   * Determines if a route should be reused.
   * @param future
   * @param curr
   * @returns {boolean}
   */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    // this.logger.log('[CustomReuseService:shouldReuseRoute]', future, curr);
    return this.calcKey(curr) === this.calcKey(future);
  }
}
