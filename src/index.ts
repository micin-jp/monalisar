import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from './http/http.module';

import { RepoModule } from './repo/repo.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RepoModule
  ],
  declarations: [
  ],
  exports: [
    RepoModule
  ]
})
export class Monalisar {
}
