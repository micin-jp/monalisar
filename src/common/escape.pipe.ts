import {
  Pipe,
  PipeTransform
} from '@angular/core';
import escapeHtml from 'escape-html';
import { isNull } from '../utils';

@Pipe({
  name: 'escape',
  pure: true
})
export class EscapePipe implements PipeTransform {

  transform(value: string): string {
    if (isNull(value)) {
      return '';
    }
    return escapeHtml(value);
  }
}
