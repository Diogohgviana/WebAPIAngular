import { Injectable } from '@angular/core';

import {Funcionario} from './funcionario.model'

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  selectedFuncionario : Funcionario;
  constructor() { }
}
