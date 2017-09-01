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
  selector: 'github-repo',
  templateUrl: 'repo-detail.component.html',
  styleUrls: [
    './repo-detail.component.css'
  ]
})

export class RepoDetailComponent implements OnInit {
  @Input() user: string;
  @Input('repo') repoName: string;
  private _repo: Repo;

  constructor(
    private _service: RepoService,
    private _http: Http
  ) {
  }

  get repo(): Repo {
    return this._repo;
  }

  ngOnInit(): void {
    const self = this;
    if (!self.user) {
      throw new Error('`user` must be specified.');
    }
    if (!self.repoName) {
      throw new Error('`repo` must be specified.');
    }
    self._service.show(self.user, self.repoName)
      .subscribe((repo: Repo) => {
        self._repo = repo;
      }, (e) => {
        Logger.error(`Can't fetch ${self.user}/${self.repoName}`);
      });
  }
}
