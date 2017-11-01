import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'state'})
export class StatePipe implements PipeTransform {
  transform(value: number): string {
    switch(value) {
      case 1: return 'Unasigned'
      case 2: return 'On Hold'
      case 3: return 'In progress'
      case 4: return 'Done'
      default: return value.toString();
    }
  }
}