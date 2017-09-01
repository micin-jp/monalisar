import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { EscapePipe } from './escape.pipe';
import { LinkifyPipe } from './linkify.pipe';
import { SanitizePipe } from './sanitize.pipe';

const pipes = [
  EscapePipe,
  LinkifyPipe,
  SanitizePipe
];


@NgModule({
  declarations: [
    ...pipes
  ],
  imports: [
    NgCommonModule
  ],
  exports: [
    ...pipes
  ],
  providers: [
  ]
})

export class CommonModule {
}
