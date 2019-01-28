import { Component, OnInit } from '@angular/core';

import { FuncionarioService} from '../shared/funcionario.service'
@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit() {
  }

}
