import {Component} from '@angular/core';

@Component({
selector:'app-reportealmacenes',
templateUrl:'../vistas/reporte de almacenes.html',
styleUrls: ['../estilos/reporte de almacenes.css'],
})

export class ReportealmacenesComponente{
public titulo:string;
constructor(){
this.titulo='Relación de reportealmacenes'
}
}
