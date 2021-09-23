import { AbstractService } from './abstract.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AplicativosService  extends AbstractService {

  constructor(
    public http: HttpClient
  ) {
    super(http, 'aplicativo');
  }
}
