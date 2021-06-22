import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  // estos son los argumentos que le podemos enviar a través del pipe desde el
  // HTML para poder operarlos:
  // value recibirá el valor del pipe
  // todas en este caso es un argumento que pasa un boolean a través del pipe
  transform(value: string, todas: boolean = true): string {

    value = value.toLocaleLowerCase();
    let nombres = value.split(' '); // split te devuelve un array, así que nombre 
    // es un array de strings en minusculas separados por espacios en blanco

    if (todas) {
      nombres = nombres.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1); // substr(1) te corta el string después del número que le pases, es decir la palabra 'jose' substring(1) sería 'ose'
      });
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');

  }

}
