import { AplicativosService } from './../../../service/aplicativos.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps-detail',
  templateUrl: './apps-detail.page.html',
  styleUrls: ['./apps-detail.page.scss'],
})
export class AppsDetailPage implements OnInit {

  nomeApp;
  id;

  constructor(
    private activatedRoute: ActivatedRoute,
    private aplicativoService: AplicativosService
  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;
    this.aplicativoService.getOne(this.id).subscribe( app => {

      this.nomeApp = app;


    });
  }

}
