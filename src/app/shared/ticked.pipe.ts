import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ticked'
})
export class TickedPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '✓' : '✗';
  }
}
