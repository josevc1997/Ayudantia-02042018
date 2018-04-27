import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EntradasService {

  constructor(private http: Http) {
  }

  getEntradas(){
      return this.http.get('/api/v1/entradas').map(res => res.json());
  };

  insertEntrada(data){
    console.log("service");
    return this.http.post('/api/v1/entrada', data).map(res => res.json());
  };

  getEntrada(entrada : number){
      return this.http.get(`/api/v1/getEntrada/${entrada}`).map(res => res.json());
  };

  eliminar(id : number){
      return this.http.get(`/api/v1/eliminar/${id}`).map(res => res.json());
  }

}
