import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value) {

      // {{item.tjmHt | otal | currency:'EUR'}}</td>
      // <td>{{item.totalHt() | currency:'EUR'}}</td>
      // <td>{{item.totalTtc()


      if (args) {

        return value.totalTtc(args);
      }


      return value.totalHt();
      console.log(value);
    }

    return null;




  }

}
