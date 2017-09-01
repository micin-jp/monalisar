import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as Rx from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import { ApiService } from '../http/api.service';
import { RequestType } from '../http/request-type';
import { Repo } from './repo.entity';
import { Logger } from '../utils';

@Injectable()
export class RepoService {

  constructor(
    private _api: ApiService
  ) {
  }

  // GET /users/:user/repos
  index(user: string): Rx.Observable<Repo[]> {
    if (!user) {
      throw new Error('Usage: index(user: string)');
    }
    const url: string = `users/${user}/repos`;

    return this._api.request(RequestType.GET, url, null)
      .map((res: Response) => {
        const _repos: Repo[] = [];
        for (let _json of res.json()) {
          _repos.push(new Repo(_json));
        }
        return _repos;
      });
  }

  // GET /repos/:user/:name
  show(user: string, repo: string): Rx.Observable<Repo> {
    if (!user || !repo) {
      throw new Error('Usage: show(user: string, repo: string)');
    }
    const url: string = `repos/${user}/${repo}`;

    return this._api.request(RequestType.GET, url, null)
      .map((res: Response) => {
        return new Repo(res.json());
      });
  }
}
