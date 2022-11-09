import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';
import { TemporizadorService } from './services/temporizador.service';
import { DisciplinasComponent } from './components/disciplinas/disciplinas.component';
import { DisciplinasService } from './services/disciplinas.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    TemporizadorComponent,
    DisciplinasComponent,
  ],
  bootstrap: [AppComponent],
  providers: [TemporizadorService, DisciplinasService],
})
export class AppModule {}
