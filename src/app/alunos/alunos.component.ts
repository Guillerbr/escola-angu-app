import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  alunos :Array<any> = new Array();

  constructor(private alunosService: AlunosService) { }

  ngOnInit() {
    this.listarAlunos();
  }

  listarAlunos(){

  }

}
