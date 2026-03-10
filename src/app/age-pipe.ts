import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]) 
   {
     let date = new Date(value);
      console.log(date);

      let currentDate= new Date();
      let result= currentDate.getFullYear() -date.getFullYear();

      return '$(result) years old';
  }

}
