import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expirationDatePipe',
})
export class ExpirationDatePipePipe implements PipeTransform {
  transform(month: number, year: number): string {
    return month + ' / ' + year;
  }
}
