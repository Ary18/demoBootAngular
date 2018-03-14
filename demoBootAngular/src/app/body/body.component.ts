import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Persona } from '../models/persona';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() utente: string;
  @Output() bodyOutput: EventEmitter<string> = new EventEmitter();
  @Output() stringaOutput: EventEmitter<string> = new EventEmitter();

  messaggi: string;
  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.messaggi = this.messageService.riceviMessaggioDaBody();
  }
  clear() {
    this.messageService.clear();
    // this.messaggi = [];
  }
  trasmetti() {
    this.bodyOutput.emit('trasmissione');
    this.messaggi = this.messageService.riceviMessaggioDaBody();
  }
  trasmettiStringa() {
    this.stringaOutput.emit('sono riuscita a trasmettere una stringa');
    this.messaggi = this.messageService.riceviMessaggioDaBody();
  }

}
