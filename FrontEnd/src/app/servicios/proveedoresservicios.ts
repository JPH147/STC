
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {Proveedor} from '../contenido/modelos/proveedor';
import { HttpClient,HttpHeaders }   from '@angular/common/http';
import { HttpParams } from '@angular/common/http';


@Injectable()
export class ProveedorServicio {
  private url = 'http://localhost:8000/proveedores/';

  constructor(private http: HttpClient) { }

  ListadoProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }

  EliminarProveedor(id,proveedor:Proveedor){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    let json = JSON.stringify(proveedor);
    let params = "json="+json;
    return this.http.post(this.url+id, params, {headers:headers}).pipe(map(res=>res))
  }

}
