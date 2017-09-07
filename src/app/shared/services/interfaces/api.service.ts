import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_METHOD } from '../../types/api-command.type';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/shareReplay';

@Injectable()
export class ApiService {
  private httpGet$: Observable<any>;

  constructor(private http: HttpClient) {
    this.httpGet$ = this.http.get('https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty').shareReplay();
  }

  public request(config: any, params: any, ...args: any[]): Observable<any> {
    let url = config.url;
    if ( ~config.url.indexOf('${ID}') ) {
      url = url.replace('${ID}', args[0]);
    }

    switch ( config.method ) {
      case API_METHOD.POST:
        return this.http.post(url, params);
      case API_METHOD.GET:
        return this.http.get(url, params);
      case API_METHOD.PUT:
        return this.http.put(url, params);
      case API_METHOD.DELETE:
        return this.http.delete(url, params);
      default:
        return Observable.of({});
    }
  }
}
