import { Component, OnInit, Input } from '@angular/core';
import { DisciplinasService } from '../../services/disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css'],
})
export class DisciplinasComponent implements OnInit {
  @Input() nome: string;
  @Input() diaDaSemana: string;
  @Input() horario: string;
  constructor(public disciplinas: DisciplinasService) {}

  ngOnInit() {}
}
