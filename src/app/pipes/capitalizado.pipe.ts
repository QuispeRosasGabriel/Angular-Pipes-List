import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean): string {
    //Captura el valor que se va a trabasformar
    console.log(value);
    //Captura argumentos que se le da a un pipe
    // console.log(...args);
    value = value.toLowerCase();
    let nombre = value.split(' ')

    if (todas) {
      nombre = nombre.map(nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      })
      return nombre.join(' ')
    }
    else {
      nombre[0] = nombre[0][0].toUpperCase() + nombre[0].substr(1);
    }
    return nombre.join(' ')
  }
}
