import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoasService } from 'src/app/service/pessoas.service';

@Component({
  selector: 'app-cria-user',
  templateUrl: './cria-user.page.html',
  styleUrls: ['./cria-user.page.scss'],
})
export class CriaUserPage implements OnInit {


  formUser: FormGroup = this.formBuilder.group({
    nome: [null, [Validators.required]],
    cpf: [null, [Validators.required, Validators.maxLength(9)]],
    rg: [null, [Validators.required]],
    nascimento: [null, [Validators.required]],
    senha: [null, [Validators.required]],
    perfil: [null, [Validators.required] ],
    aplicativos: [null, [Validators.required]]

  });

  constructor(
    //private pessoasService: PessoasService,
    private formBuilder: FormBuilder,
    private servico: PessoasService,
  ) { }

  ngOnInit() {

  }

  //Envia dados do formulario para GET
  async cadastro(){
    const formEnvio: any = this.formUser.getRawValue();
    console.log(formEnvio);
    const result = await this.servico.post(formEnvio).toPromise();
    console.log(result);

  }
}
