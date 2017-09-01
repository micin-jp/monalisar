import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import { Repo } from './repo.entity';
import { colors } from './_colors';
import { Logger } from '../utils';

@Component({
  selector: 'widget',
  templateUrl: '_widget.component.html',
  styleUrls: ['./_widget.component.css']
})

export class WidgetComponent implements OnInit {
  @Input() repo: Repo;

  constructor() {
  }

  ngOnInit(): void {
    const self = this;
    if (!self.repo) {
      Logger.warn('`repo` is empty.');
      self.repo = <Repo>{};
    }
  }

  getColor(lang: string): string {
    const obj: Object = colors[lang];
    if (!obj) {
      return 'transparent';
    } else {
      return obj['color'];
    }
  }
}
