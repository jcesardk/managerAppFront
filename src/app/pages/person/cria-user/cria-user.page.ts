import { Router } from '@angular/router';
import { AssociarAppService } from './../../../service/associar-app.service';
import { PerfilService } from './../../../service/perfil.service';
import { AplicativosService } from './../../../service/aplicativos.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PessoasService } from 'src/app/service/pessoas.service';
import { forkJoin } from 'rxjs';


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
    private perfilService: PerfilService,
    private router: Router,
    private associarAppService: AssociarAppService
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

    this.servico.post(formEnvio).pipe(
      mergeMap( (user) => {
        console.log('userMerge', user);

        const indiceId = '_id';
        const idUser   = user[indiceId];

        const arrayObs = [];

        formEnvio.aplicativo.forEach(app => {
          const associar = {
            _idApp:  app,
            _idUser: idUser
          };
          arrayObs.push(this.associarAppService.post(associar));
        });

        console.log('chama', arrayObs);

        return forkJoin(arrayObs);
      })
    ).subscribe( () => {
      console.log('Usuario cadastrado');
      this.router.navigate(['/home/tabs/account']);
    }, error => {
      console.log('error no cadastro');
    });

  }
}
