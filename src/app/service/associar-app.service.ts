import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AbstractService } from './abstract.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociarAppService extends AbstractService{

  constructor(
    public http: HttpClient,
  ) {
    super (http, 'associarApp');
   }
}
