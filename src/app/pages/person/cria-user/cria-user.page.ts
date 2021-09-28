import { PerfilService } from './../../../service/perfil.service';
import { AplicativosService } from './../../../service/aplicativos.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoasService } from 'src/app/service/pessoas.service';

@Component({
  selector: 'app-cria-user',
  templateUrl: './cria-user.page.html',
  styleUrls: ['./cria-user.page.scss'],
})
export class CriaUserPage implements OnInit {

  aplicativos;
  perfil;

  formUser: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required]],
    cpf: [null, [Validators.required, Validators.maxLength(9)]],
    rg: [null, [Validators.required]],
    nascimento: [null, [Validators.required]],
    senha: [null, [Validators.required]],
    perfil: [null, [Validators.required] ],
    aplicativo: [null, [Validators.required]]

  });

  constructor(
    //private pessoasService: PessoasService,
    private aplicativoService: AplicativosService,
    private formBuilder: FormBuilder,
    private servico: PessoasService,
    private perfilService: PerfilService
  ) { }

  ngOnInit() {

    this.perfilService.get().subscribe( (tiposPerfil) => {
      console.log('perfil', tiposPerfil);
      this.perfil = tiposPerfil;
    });

    this.aplicativoService.get().subscribe( (apps) => {
      console.log('sdsd', apps);
      this.aplicativos = apps;
    });
  }

  //Envia dados do formulario para GET
  async cadastro(){
    const formEnvio: any = this.formUser.getRawValue();
    console.log("ENVIOoo", formEnvio);
    const result = await this.servico.post(formEnvio).toPromise();
    console.log(result);

  }
}
