import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La pagina del miguel';
  var1 = 12;
  var2 = 21;
  desactivado = true;
  nombre: string = '';
  paises: any = [
    {activo: true, nombre: 'Colombia'},
    {activo: true, nombre: 'Brasil'},
    {activo: false, nombre: 'Argentina'},
    {activo: true, nombre: 'Polonia'},
    {activo: false, nombre: 'Alemania'},
    {activo: true, nombre: 'Francia'}
  ]
  lat:Number = 51.678418;
  lng:number = 7.809007;

  constructor() { // es lo primero que carga al iniciar la pagina y no carga todos en orden, todo es al tiempo
    setTimeout(() => {
      this.desactivado = false;
    }, 3000);
  }
  ejecutar() {
    alert('Ejecutando...');
  }
}
