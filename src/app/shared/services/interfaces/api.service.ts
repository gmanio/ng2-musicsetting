import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_METHOD } from '../../types/api-command.type';
import 'rxjs/add/observable/of';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
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
