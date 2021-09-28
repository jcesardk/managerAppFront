import { AplicativosService } from './../../../service/aplicativos.service';
import { PessoasService } from './../../../service/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id;
  pessoa;
  aplicativos;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoasService,
    private aplicativoService: AplicativosService


  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
    this.pessoaService.getOne(this.id).subscribe( dt => {

      this.pessoa = dt;

    });

    this.aplicativoService.get().subscribe( (apps) => {
      console.log('sdsd', apps);
      this.aplicativos = apps;
    });


  }

}
