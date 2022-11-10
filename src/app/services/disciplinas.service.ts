import { Injectable, Input } from '@angular/core';

class Disciplina {
  nome: String;
  diaDaSemana: String;
  horario: String;
}

@Injectable()
export class DisciplinasService {
  private disciplinas: Disciplina[] = [];
  public disciplinasAntigas: Disciplina[] = [
    { nome: 'Flutter I', diaDaSemana: 'Segunda-feira', horario: '19:00' },
    { nome: 'Inglês V', diaDaSemana: 'Terça-feira', horario: '19:00' },
    { nome: 'Marketing', diaDaSemana: 'Terça-feira', horario: '20:40' },
    { nome: 'Marketing', diaDaSemana: 'Quarta-feira', horario: '19:00' },
    { nome: 'Java II', diaDaSemana: 'Quinta-feira', horario: '19:00' },
    { nome: 'Angular', diaDaSemana: 'Sexta-feira', horario: '19:00' },
  ];

  constructor() {}

  adicionarNaLista(nome: string, diaDaSemana: string, horario: string) {
    this.disciplinas.push({ nome, diaDaSemana, horario });
  }

  remover(index: number) {
    this.disciplinas.splice(index, 1);
    this.disciplinasAntigas.splice(index, 1);
  }

  getListaNova() {
    return this.disciplinas;
  }

  getListaAtual() {
    return this.disciplinasAntigas;
  }
}
