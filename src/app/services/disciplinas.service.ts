import { Injectable, Input } from '@angular/core';

class Disciplina {
  nome: String;
  diaDaSemana: String;
  horario: String;
}

@Injectable()
export class DisciplinasService {
  private disciplinas: Disciplina[] = [];

  constructor() {}

  adicionarNaLista(nome: string, diaDaSemana: string, horario: string) {
    this.disciplinas.push({ nome, diaDaSemana, horario });
  }

  remover(index: number) {
    this.disciplinas.splice(index, 1);
  }

  getLista() {
    return this.disciplinas;
  }
}
