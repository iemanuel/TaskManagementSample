import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'priority'})
export class PriorityPipe implements PipeTransform {
  transform(value: number): string {
    switch(value) {
      case 1: return 'Urgent'
      case 2: return 'Important'
      case 3: return 'Normal'
      case 4: return 'Low'
      default: return value.toString();
    }
  }
}