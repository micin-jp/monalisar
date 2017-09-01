import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { RepoService } from './repo.service';
import { Repo } from './repo.entity';
import { Logger } from '../utils';

import { Http } from '@angular/http';

@Component({
  selector: 'github-repos',
  templateUrl: 'repo.component.html',
  styleUrls: [
    './repo.component.css'
  ]
})

export class RepoComponent implements OnInit {
  @Input() user: string;
  private _repos: Repo[] = [];

  constructor(
    private _service: RepoService,
    private _http: Http
  ) {
  }

  get repos(): Repo[] {
    return this._repos;
  }

  ngOnInit(): void {
    const self = this;
    if (!self.user) {
      throw new Error('`user` must be specified.');
    }
    self._service.index(self.user)
      .subscribe((repos: Repo[]) => {
        self._repos = repos.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      }, (e) => {
        Logger.error(`Can't fetch ${self.user}.repos`);
      });
  }
}
