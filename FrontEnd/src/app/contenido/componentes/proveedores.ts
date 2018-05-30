import { Component, OnInit } from '@angular/core';
import {ProveedorServicio} from '../../servicios/proveedoresservicios';
import {MatSort, MatTableDataSource} from '@angular/material';
import { ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {Proveedor} from '../modelos/proveedor';

@Component({
  selector: 'app-proveedores',
  templateUrl:'../vistas/proveedores.html',
  styleUrls: ['../estilos/proveedores.css'],
  providers: [ProveedorServicio]
})
export class ProveedoresComponente implements OnInit {

  public titulo: string;
  dataSource = new ProveedorData(this._ProveedorServicio);
  displayedColumns = ['ruc', 'razon_social', 'observacion', 'opciones'];

  constructor(private _ProveedorServicio: ProveedorServicio) {
    this.titulo="Proveedores"
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){}

  Eliminar(id, proveedor){
    this._ProveedorServicio.EliminarProveedor(id,proveedor).subscribe(
      res=>{console.log("Exito")},
      error=>{console.log(error)}
    )
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
}

}

export class ProveedorData extends DataSource<any> {

  constructor(private _ProveedorServicio: ProveedorServicio) {
    super();
  }

  connect(): Observable<Proveedor[]> {
    return this._ProveedorServicio.ListadoProveedores();
  }

  disconnect() {}
}
