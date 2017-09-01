import {
  Pipe,
  PipeTransform
} from '@angular/core';
import { regex } from './regex';

@Pipe({
  name: 'linkify',
  pure: true
})
export class LinkifyPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    const match: string[] = value.match(regex);
    return value.replace(regex, '<a href="$&" target="_blank">$&</a>');
  }
}
