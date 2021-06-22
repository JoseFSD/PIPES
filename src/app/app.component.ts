import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'joSe pATo rodrígUEZ';
  array: number[] = [1,2,3,4,5,6,7,8,9,10];
  personajes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Loki', 'Groot'];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 12345;
  fecha: Date = new Date();
  activar: boolean = true;

  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/s5Ovfi_jbtA';
  
  heroe = {
    nombre: 'Logan',
    clave: 'Lobezno',
    edad: 500,
    direccion: {
      calle: 'C/llamalo X-Men',
      numero: 1
    }
  }
  
  // como la promesa va a resolver un string lo tipamos entre <string>
  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Acaban de llegar los datos');
    }, 4500);
  });
}
