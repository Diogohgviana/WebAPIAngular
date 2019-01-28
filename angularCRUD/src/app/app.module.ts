import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { FuncionarioComponent } from './funcionarios/funcionario/funcionario.component';
import { FuncionarioListComponent } from './funcionarios/funcionario-list/funcionario-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    FuncionarioComponent,
    FuncionarioListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
