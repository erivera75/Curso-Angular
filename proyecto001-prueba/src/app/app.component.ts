import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Eduardo Rivera';
  edad = 45;
  email = 'eduardo@gmail.com';
  sueldos = [27000, 55000, 103000]
  activo = true;

  esActivo(){
    return this.activo ? 'Trabajador activo' : 'Trabajador inactivo';
  }

  ultimos3Sueldos() {
    return this.sueldos.reduce((a, v) => (a += v, a), 0);
  }
}
