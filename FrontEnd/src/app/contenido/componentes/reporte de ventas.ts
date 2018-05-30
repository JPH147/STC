import {Component} from '@angular/core';

@Component({
selector:'app-reporteventas',
templateUrl:'../vistas/reporte de ventas.html',
styleUrls: ['../estilos/reporte de ventas.css'],
})

export class ReporteventasComponente{
public titulo:string;
constructor(){
this.titulo='Relación de reporteventas'
}
}
