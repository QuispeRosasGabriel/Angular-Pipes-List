import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre: string = "Capitan America";
  nombre2: string = "gaBriEL QuIsPE ROSas"
  numeros = [3, 5, 7, 8, 9, 10]
  PI: number = Math.PI;
  porcentaje: number = 0.235;
  salario: number = 12345;
  valorPromesa = new Promise<string>((res, rej) => {
    setTimeout(() => {
      res("llego la data")
    }, 4500)
  })
  fecha: Date = new Date();
  idioma: string = "es-PE";
  videoUrl: string = "https://www.youtube.com/embed/A4js2DnvFU4"
  heroe = {
    nombre: "Hulk",
    clave: "Hombre Verde",
    edad: 40,
    direccion: {
      calle: "primera",
      casa: 20
    }
  };
  activar: boolean = true;

}
