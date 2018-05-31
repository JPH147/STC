
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
  private a: any;

  constructor(
    private http: HttpClient,
    private _http:Http
  ) { }

  ListadoProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }

  EliminarProveedor(proveedor:Proveedor){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    let json = JSON.stringify(proveedor);
    return this.http.post(this.url+proveedor.idproveedor, json, {headers:headers}).pipe(map(res=>res))
  }

  ObtenerProveedor(id){
    return this._http.get(this.url+id)
                     .pipe(map(res => res.json()))
  }

}
