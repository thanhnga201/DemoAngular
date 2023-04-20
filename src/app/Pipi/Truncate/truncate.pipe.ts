import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(str: string, ...args: any[]): string {
    if (str.length > 50) return str.slice(0, 50) + "...";
    return str;
  }

}
