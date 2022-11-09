import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';
import { TemporizadorService } from './services/temporizador.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, TemporizadorComponent],
  bootstrap: [AppComponent],
  providers: [TemporizadorService],
})
export class AppModule {}
