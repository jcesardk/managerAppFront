import { AplicativosService } from './../../../service/aplicativos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-criar-apps',
  templateUrl: './criar-apps.page.html',
  styleUrls: ['./criar-apps.page.scss'],
})
export class CriarAppsPage implements OnInit {

  criaApp: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    private aplivativoService: AplicativosService
  ) { }

  ngOnInit() {
    this.criaApp = this.formBuilder.group({
      nome: [null, [Validators.required]],
      bundleId: [null, [Validators.required]]
    });
  }

  // onSubmit(){
  //   this.submitted = true;
  //   if (!this.criaApp.value) {
  //     console.log('Todos campos deve ser preenchidos!');
  //     return false;
  //   }else {
  //     console.log(this.criaApp.value);
  //   }
  // }

  cadastrarApp(){
    const formEnvioApp: any = this.criaApp.getRawValue();
    this.aplivativoService.post(formEnvioApp).subscribe( (res) => {
      console.log('res', res);
    });
  }

}
