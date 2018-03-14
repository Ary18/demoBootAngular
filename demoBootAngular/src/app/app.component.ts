import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ricevi(datoRicevuto: string) {
    this.title = datoRicevuto;
  }
  riceviStringa(dato: string) {
    this.title = dato;
  }
}
