import { AbstractService } from './abstract.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends AbstractService {

  constructor(
    public http: HttpClient,
  ) {
    super(http, 'perfil');
   }
}
