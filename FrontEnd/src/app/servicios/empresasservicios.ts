
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class EmpresaServicio{
  public url: string;

  constructor(
    private _http:Http
  ){
    this.url = 'http://localhost:8000/empresas'
  }

  ListadoEmpresas(){
    return this._http.get(this.url)
                     .pipe(map(res => res.json()))
  }

}
