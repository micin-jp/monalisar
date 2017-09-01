import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AbstractHttpService } from './abstract-http.service';

@Injectable()
export class ApiService extends AbstractHttpService {

  protected _prefix: string = 'https://api.github.com/';

  constructor(
    protected _http: Http
  ) {
    super(_http);
  }
}
