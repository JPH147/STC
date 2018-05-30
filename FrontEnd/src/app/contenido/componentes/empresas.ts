import { Component } from '@angular/core';
import {EmpresaServicio} from '../../servicios/empresasservicios';
import {Empresa} from '../modelos/empresa';

@Component({
    selector: 'app-empresas',
    templateUrl: '../vistas/empresas.html',
    styleUrls: ['../estilos/empresas.css'],
    providers:[EmpresaServicio]
})

export class EmpresasComponente{
    lista: Empresa[];
    titulo: string;
    public empresas;


    constructor(
      private servicio: EmpresaServicio
    ){
      this.titulo = 'EMPRESAS'
     }

    ngOnInit(){
      this.servicio.ListadoEmpresas().subscribe(
        resultado => {
          this.empresas = resultado;
          if(!this.empresas){
            console.log('Error')
          } else{
            console.log(this.empresas);
          }
        },
        error => {
          var ErrMensaje = <any>error;
          console.log(ErrMensaje)
        }
      )
    }
  }
