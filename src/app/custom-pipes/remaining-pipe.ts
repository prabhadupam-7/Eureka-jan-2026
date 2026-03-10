import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  pure:false
})
export class RemainingPipe implements PipeTransform {

  transform(value:string ) {
    console.log(`Remaining pipe...`)
    return 100-value.length;
  }

}
