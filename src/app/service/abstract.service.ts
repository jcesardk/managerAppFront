import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

export class AbstractService {
  protected apiUrl = environment.apiUrl;

  constructor(public http: HttpClient, public baseUrl: string) {}

  public get() {
    return this.http.get(`${this.apiUrl}/${this.baseUrl}`);
  }

  public getOne(id: string) {
    return this.http.get(`${this.apiUrl}/${this.baseUrl}/${id}`);
  }

  public post(data: any) {
    return this.http.post(`${this.apiUrl}/${this.baseUrl}`, data);
  }

  public delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${this.baseUrl}/${id}`);
  }

  public update(id: string, data: any) {
    return this.http.put(`${this.apiUrl}/${this.baseUrl}/${id}`, data);
  }
}
