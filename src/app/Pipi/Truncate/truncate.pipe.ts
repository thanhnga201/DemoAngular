import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(str: any, ...args: any[]): string {
    if (str.length > 100) return str.slice(0, 100) + "...";
    return str;
  }

}
