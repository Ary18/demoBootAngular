import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() utente: string;
  @Output() bodyOutput: EventEmitter<string> = new EventEmitter();
  @Output() stringaOutput: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  trasmetti() {
    this.bodyOutput.emit('trasmissione');
  }
  trasmettiStringa() {
    this.stringaOutput.emit('sono riuscita a trasmettere una stringa');
  }

}
