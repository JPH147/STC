import {Component} from '@angular/core';

@Component({
selector:'app-reportevehiculos',
templateUrl:'../vistas/reporte de vehiculos.html',
styleUrls: ['../estilos/reporte de vehiculos.css'],
})

export class ReportevehiculosComponente{
public titulo:string;
constructor(){
this.titulo='Relación de reportevehiculos'
}
}
