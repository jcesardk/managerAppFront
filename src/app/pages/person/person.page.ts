import { PessoasService } from 'src/app/service/pessoas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.page.html',
  styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {

  public dadosPessoa: any;

  constructor(
    private servico: PessoasService,
  ) { }

  ionViewDidEnter() {
    this.getPessoa();
  }


  ngOnInit() {
  }

  private getPessoa(){
    this.servico.get().subscribe(resposta=> {
      this.dadosPessoa = resposta;
      console.log(resposta);

    });
  }

}
