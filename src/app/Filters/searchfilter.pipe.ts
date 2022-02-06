import { Pipe, PipeTransform } from '@angular/core';
import { Model2 } from '../models/model2';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(model:Model2[],searchValue:string):Model2[] {
    if(!model || !searchValue){
      return model
  }
  return model.filter(m =>m.country.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
}
}
