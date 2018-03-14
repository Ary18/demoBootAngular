import { Component, OnInit } from '@angular/core';
import { ElementoNav } from '../models/elementoNav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  vociMenu: ElementoNav[] = [
    {nome: 'Home', indirizzo: '/home', ordine: 1, cliccato: false},
    {nome: 'Galleria', indirizzo: '/gallery', ordine: 2, cliccato: false},
    {nome: 'Contattaci', indirizzo: '/contact', ordine: 3, cliccato: false}
  ];
  constructor() { }
  ngOnInit() {
  }

}
