import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ContextService {
  città: string;
  gradi: number;
  bellezza: boolean;
  persona: Persona = new Persona();
  constructor() {
    this.città = 'Barcellona';
    this.gradi = 20;
    this.bellezza = true;
    this.persona.nome = 'Carlos';
    this.persona.indirizzo = 'Calle de la Reina 10';
    this.persona.numeroTelefono = 3785674388;
    this.persona.IT = true;
  }
  getCittà(): string {
    return this.città;
  }
  getTemperatura(): number {
    return this.gradi;
  }
  getBellezza(): boolean {
    return this.bellezza;
  }
  getPersona(): Observable<Persona> {
    return of(this.persona);
  }
  setCittà(città: string): void {
    this.città = città;
  }
  setTemperatura(gradi: number): void {
    this.gradi = gradi;
  }
  setBellezza(bellezza: boolean): void {
    this.bellezza = bellezza;
  }
  setPersona(persona: Persona): void {
    this.persona = persona;
  }
}
