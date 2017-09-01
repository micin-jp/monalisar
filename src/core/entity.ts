import { EventEmitter } from '@angular/core';
import * as Rx from 'rxjs';

export class Entity {

  protected _pristine: boolean = true;
  protected _valueChanges: EventEmitter<any> = new EventEmitter<any>();

  constructor(json?: JSON) {
  }

  get pristine(): boolean {
    return this._pristine;
  }

  get valueChanges(): Rx.Observable<any> {
    return this._valueChanges.asObservable();
  }

  markAsTouched(): void {
    this._emit(null);
  }

  markAsFetched(): void {
    delete this._valueChanges;
  }

  protected _emit(val: any): void {
    const self = this;
    self._pristine = false;
    self._valueChanges.emit(val);
  }
}
