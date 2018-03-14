import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private messaggi: string[] = [];
  constructor() { }
  riceviMessaggioDaHeader(): string {
    console.log('Messaggio da header');
    return `Sono nell'onInit di header`;
  }
  riceviMessaggioDaBody(): string {
    console.log('Messaggio da body');
    return `Sono nell'onInit di body`;
  }
  clear() {
    this.messaggi = [];
  }
}
