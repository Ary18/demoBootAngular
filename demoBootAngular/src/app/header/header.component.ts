import { Component, OnInit, Input } from '@angular/core';
import { ContextService } from '../services/context.service';
import { Persona } from '../models/persona';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() nome: string;
  ordine: number;
  cliccato: boolean;
  vociMenu: string[] = [];
  descrizionePersona: Persona;
  messaggi: string;

  constructor(private contextService: ContextService,
              private messageService: MessageService) {
    this.nome = 'Ciao';
    this.ordine = 1;
    this.cliccato = false;

    this.vociMenu.push('Home');
    this.vociMenu.push('Galleria');
    this.vociMenu.push('Contattaci');
   }
   nascondiElemento() {
    this.cliccato = ! this.cliccato;
    this.messaggi = this.messageService.riceviMessaggioDaHeader();
   }
  ngOnInit() {

    this.nome = this.contextService.getCittà();
    this.ordine = this.contextService.getTemperatura();
    this.cliccato = this.contextService.getBellezza();
    this.contextService.getPersona().subscribe(descrizionePersona => this.descrizionePersona = descrizionePersona);
    this.messaggi = this.messageService.riceviMessaggioDaHeader();
  }

}
