import { Injectable } from '@angular/core';

@Injectable()
export class TemporizadorService {
  private timer: any;
  private contador: number = 0;
  //private intervalo: number;

  constructor() {}

  iniciar(intervalo: string) {
    this.timer = setInterval(() => {
      this.contador = this.contador + Number(intervalo);
    }, 1000);
  }

  getContador() {
    return this.contador;
  }

  pausar() {
    return (this.contador = 0);
  }
}
