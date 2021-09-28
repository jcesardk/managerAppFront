import { AplicativosService } from './../../service/aplicativos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
})
export class AppsPage implements OnInit {

  public aplicativos: any;
  constructor(
    private aplicativoService: AplicativosService
  ) { }

  ionViewDidEnter(){
    this.getAplicativos();
  }

  ngOnInit() {
  }

  private getAplicativos(){
    this.aplicativoService.get().subscribe(resposta => {
      this.aplicativos = resposta;
      console.log(this.aplicativos);

    });
  }

}
