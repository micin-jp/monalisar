import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { CommonModule } from '../common/common.module';
import { RepoService } from './repo.service';
import { RepoComponent } from './repo.component';
import { RepoDetailComponent } from './repo-detail.component';
import { WidgetComponent } from './_widget.component';
import { ForkComponent } from './_fork.component';
import { StartComponent } from './_star.component';

@NgModule({
  imports: [
    NgCommonModule,
    CommonModule
  ],
  declarations: [
    RepoComponent,
    RepoDetailComponent,
    WidgetComponent,
    ForkComponent,
    StartComponent
  ],
  exports: [
    RepoComponent,
    RepoDetailComponent
  ],
  providers: [
    RepoService
  ]
})

export class RepoModule {
}
