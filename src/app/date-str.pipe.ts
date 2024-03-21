import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateStr'
})
export class DateStrPipe implements PipeTransform {

  transform(value: string): string {

    const pattern = /(\d{4})(\d{2})(\d{2})/;
    const matchResult = value.match(pattern);

    if (matchResult) {
      const [_, day, month,year ] = matchResult;
      return [day, month,year ].join('/');
    } else {
      console.error('No match found for date pattern:', value);
      return ''; 
    }
  }

}
