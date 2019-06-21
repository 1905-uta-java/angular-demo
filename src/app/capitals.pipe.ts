import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitals'
})
export class CapitalsPipe implements PipeTransform {

  transform(value: String, args?: any): String {
    let valueFirst = value.substring(0,1);
    let valueAlter = valueFirst.toUpperCase() + value.substring(1);
    return valueAlter;
  }

}
