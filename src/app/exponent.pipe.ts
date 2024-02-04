import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponent'
})
export class ExponentPipe implements PipeTransform {

  transform(value: number, power?: number): number {
    return Math.pow(value, isNaN(power) ? 1 : power);
  }

}
