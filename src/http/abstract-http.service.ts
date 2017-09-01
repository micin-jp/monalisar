import { Params } from '@angular/router';
import {
  Http,
  Headers,
  Response,
  RequestOptions
} from '@angular/http';
import * as Rx from 'rxjs';
import { RequestType } from './request-type';
import { Logger } from '../utils';


export abstract class AbstractHttpService {

  protected abstract _prefix: string;
  private _requestOptions: RequestOptions;

  constructor(
    protected _http: Http
  ) {
    const self = this;
    const headers: Headers = new Headers({
      'Accept': 'application/vnd.github.v3+json'
    });
    self._requestOptions = new RequestOptions({
      headers: headers,
    });
  }

  request(type: RequestType, url: string, params?: Params): Rx.Observable<Response> {
    const self = this;
    url = `${self._prefix}${url}`;

    let response: Rx.Observable<Response>;
    switch (type) {
      case RequestType.GET:
        response = self._get(url, params);
        break;
      case RequestType.POST:
        response = self._post(url, params);
        break;
      case RequestType.PUT:
        response = self._put(url, params);
        break;
      case RequestType.PATCH:
        response = self._patch(url, params);
        break;
      case RequestType.DELETE:
        response = self._delete(url, params);
        break;
      default:
        Logger.error('Unknown request type specified.');
        return;
    }
    return response;
  }

  protected _get(url: string, params: Params): Rx.Observable<Response> {
    const self = this;
    if (params) {
      url += '?';
      for (let key in params) {
        url += `${key}=${params[key]}&`;
      }
    }
    return self._http.get(url, self._requestOptions);
  }

  protected _post(url: string, params: Params): Rx.Observable<Response> {
    const self = this;
    return self._http.post(url, JSON.stringify(params), self._requestOptions);
  }

  protected _put(url: string, params: Params): Rx.Observable<Response> {
    const self = this;
    return self._http.put(url, JSON.stringify(params), self._requestOptions);
  }

  protected _patch(url: string, params: Params): Rx.Observable<Response> {
    const self = this;
    return self._http.patch(url, JSON.stringify(params), self._requestOptions);
  }

  protected _delete(url: string, params: Params): Rx.Observable<Response> {
    const self = this;
    return self._http.delete(url, self._requestOptions);
  }
}
