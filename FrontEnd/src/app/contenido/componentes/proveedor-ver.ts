import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProveedorServicio} from '../../servicios/proveedoresservicios';
import {Proveedor} from '../modelos/proveedor';

@Component({
  selector:'app-proveedor-ver',
  templateUrl:'../vistas/proveedor-ver.html',
  styleUrls: ['../estilos/proveedor-ver.css'],
  providers:[ProveedorServicio]
})

export class ProveedorVerComponente{
  public titulo: string;
  public proveedor;

  constructor (
  private route: ActivatedRoute,
  private router: Router,
  private servicio: ProveedorServicio
  ){
    this.titulo="Proveedor"
  }

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.servicio.ObtenerProveedor(id).subscribe(
      resultado => {
        this.proveedor = resultado[0];
        console.log(this.proveedor);
      },
      error => {
        var ErrMensaje = <any>error;
        console.log(ErrMensaje)
      }
    )
  }

}
