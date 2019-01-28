import { Component, OnInit } from '@angular/core';

import { FuncionarioService} from '../shared/funcionario.service'
@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  constructor(private funcionarioService : FuncionarioService) { }

  ngOnInit() {
  }

}
