import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): any {
    
    let results = value.split('');

    if (activar) {
      results = results.map( result => {
        return result = '*';
      });
    } else {
      return value;
    }
    
    return results.join(' ');
  }

}
