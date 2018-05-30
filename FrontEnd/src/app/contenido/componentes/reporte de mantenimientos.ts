import {Component} from '@angular/core';

@Component({
selector:'app-reportemantenimientos',
templateUrl:'../vistas/reporte de mantenimientos.html',
styleUrls: ['../estilos/reporte de mantenimientos.css'],
})

export class ReportemantenimientosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de reportemantenimientos'
}
}
