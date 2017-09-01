import { Entity } from '../core/entity';

export class Repo extends Entity {
  private _name: string;
  private _desc: string;
  private _url: string;
  private _lang: string;
  private _stars: number;
  private _forks: number;

  constructor(json?: JSON) {
    super(json);
    const self = this;
    self.name = json['name'];
    self.desc = json['description'];
    self.url = json['html_url'];
    self.lang = json['language'];
    self.stars = json['stargazers_count'];
    self.forks = json['forks_count'];
  }

  get name(): string {
    return this._name;
  }

  set name(val: string) {
    const self = this;
    self._name = val;
    self._emit(val);
  }

  get desc(): string {
    return this._desc;
  }

  set desc(val: string) {
    const self = this;
    self._desc = val;
    self._emit(val);
  }

  get url(): string {
    return this._url;
  }

  set url(val: string) {
    const self = this;
    self._url = val;
    self._emit(val);
  }

  get lang(): string {
    return this._lang;
  }

  set lang(val: string) {
    const self = this;
    self._lang = val;
    self._emit(val);
  }

  get stars(): number {
    return this._stars;
  }

  set stars(val: number) {
    const self = this;
    self._stars = val;
    self._emit(val);
  }

  get forks(): number {
    return this._forks;
  }

  set forks(val: number) {
    const self = this;
    self._forks = val;
    self._emit(val);
  }
}
