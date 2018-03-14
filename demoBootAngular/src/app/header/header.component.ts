import { Component, OnInit } from '@angular/core';
import { ContextService } from '../services/context.service';
import { Persona } from '../models/persona';

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
  descrizionePersona: Persona;

  constructor(private contextService: ContextService) {
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

    this.nome = this.contextService.getCittà();
    this.ordine = this.contextService.getTemperatura();
    this.cliccato = this.contextService.getBellezza();
    this.contextService.getPersona().subscribe(descrizionePersona => this.descrizionePersona = descrizionePersona);
  }

}
