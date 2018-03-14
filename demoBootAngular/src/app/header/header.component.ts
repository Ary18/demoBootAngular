import { Component, OnInit } from '@angular/core';
// import { Persona } from '../models/persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nome: string;
  ordine: number;
  cliccato: boolean;
  vociMenu: string[] = [];

  constructor() {
    this.nome = 'Ciao';
    this.ordine = 1;
    this.cliccato = false;

    this.vociMenu.push('Home');
    this.vociMenu.push('Galleria');
    this.vociMenu.push('Contattaci');
   }
   nascondiElemento() {
    this.cliccato = ! this.cliccato;
   }
  ngOnInit() {
  }

}
