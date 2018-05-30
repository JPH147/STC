import {Component} from '@angular/core';

@Component({
selector:'app-cotizacion',
templateUrl:'../vistas/cotizacion.html',
styleUrls: ['../estilos/cotizacion.css'],
})

export class CotizacionComponente{
public titulo:string;
constructor(){
this.titulo='Relación de cotizacion'
}
}
