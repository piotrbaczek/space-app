import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ticked',
    standalone: false
})
export class TickedPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '✓' : '✗';
  }
}
