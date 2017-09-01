import {
  Pipe,
  PipeTransform
} from '@angular/core';
import sanitizeHtml from 'sanitize-html';
import { isNull } from '../utils';

@Pipe({
  name: 'sanitize',
  pure: true
})
export class SanitizePipe implements PipeTransform {

  transform(value: string): string {
    if (isNull(value)) {
      return '';
    }
    return sanitizeHtml(value, { });
  }
}
